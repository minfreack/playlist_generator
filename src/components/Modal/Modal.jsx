import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Commons/Button';
import { H3 } from '../Commons/H3';
import { InputText } from '../Commons/InputText';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import PropTypes from 'prop-types';
import './modal.css';
import axios from 'axios';

const StyledModal = styled.div`
background-color: #000000;
position: absolute;
width: 25rem;
left: 68.45rem;
padding: 2rem 1rem 1rem 1rem;
height: 100vh;
top: 0px;
transition: .5s;
`;

export const Modal = ({modal, setModal, token, userId, artistUser, songsUser, genresUser}) => {

	const [playlistName, setPlaylistName] = useState('');
	const [playlistDesc, setPlaylistDesc] = useState('');
	const [playlistState, setPlaylistState] = useState(true);
	const [urlPlaylist, setUrlPlaylist] = useState('');

	const handlePlaylistName = (e) => {
		e.preventDefault();
		setPlaylistName(e.target.value);
	};
	const handlePlaylistDesc = (e) => {
		e.preventDefault();
		setPlaylistDesc(e.target.value);
	};
	const handlePlaylistState = () => {
		setPlaylistState(!playlistState);
	};

	const handleClick = async() => {
		let recommendations = [];
		let recommendationsURI = '';
		const params = JSON.stringify(
			{
				'name': playlistName,
				'description': playlistDesc,
				'public': playlistState
			}
		);
		const playlistInfo = {
			id: '',
			url: ''
		};
		try {
			await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`,params,{
				headers: {
					Authorization: 'Bearer '+ token,
					Accept: 'application/json'
				},
			}).then(res => {
				setUrlPlaylist(res.data.external_urls.spotify);
				playlistInfo.url = res.data.external_urls.spotify;
				playlistInfo.id = res.data.id;
				setUrlPlaylist(res.data.external_urls.spotify);
			});
			let copyArtistUser = [...artistUser];
			let copySongsUser = [...songsUser];
			let copyGenresUser = [...genresUser];
			let limit = Math.round(50 / (Math.round((artistUser.length + songsUser.length + genresUser.length) / 3)));
			let areEmpty = false;
			do {
				if (copyArtistUser.length == 0 && copySongsUser.length == 0 && copyGenresUser.length == 0){
					areEmpty = true;
				}else{
					await axios.get(`https://api.spotify.com/v1/recommendations?limit=${limit}
					&seed_artists=${copyArtistUser.length == 0 ? artistUser[0] : copyArtistUser.pop()}
					&seed_genres=${copyGenresUser.length == 0 ? genresUser[0] : copyGenresUser.pop()}
					&seed_tracks=${copySongsUser.length == 0 ? songsUser[0] : copySongsUser.pop()}`,{
						headers: {
							Authorization: 'Bearer '+ token,
							Accept: 'application/json',
						},
					}).then(res => {
						for (const track of res.data.tracks) {
							recommendations.push(track);
						}
					});
				}
			}while(areEmpty == false);
			let copyArray = [...recommendations];
			console.log(copyArray.length);
			for (let i = 0; i < recommendations.length; i++) {
				let	item = recommendations[i];
				for (let j = 0; j < recommendations.length; j++) {
					if (item.id == recommendations[j].id && recommendations.indexOf(recommendations[i]) != recommendations.indexOf(recommendations[j])){
						copyArray.splice(copyArray.indexOf(copyArray[j]), 1);
					}
				}
			}
			while (copyArray.length != 100) {
				copyArray.pop();
			}
			console.log(copyArray.length);
			for (const recommendation of copyArray) {
				recommendationsURI += `%2C${recommendation.uri}`;
			}
			await axios.post(`https://api.spotify.com/v1/playlists/${playlistInfo.id}/tracks?uris=${recommendationsURI.substr(3)}`,{},{
				headers: {
					Authorization: 'Bearer '+ token,
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}).then( res => {
				console.log(res);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledModal>
			<SectionFlex direction='column' gap='.75rem'>
				<Button onClick={() => setModal(!modal)} >&#60; Volver a mis elecciones</Button>
				<H3>¡Solo queda un paso más!</H3>
				<P>Toda playlist necesita un nombre</P>
				<InputText placeholder='Mi nueva playlist...' value={playlistName} onChange={handlePlaylistName}/>
				<P>Descripción</P>
				<InputText placeholder='Esta es mi playlist...' value={playlistDesc} onChange={handlePlaylistDesc}/>
				<P>¿Quieres compartir tu playlist?</P>
				<P variant>Si está activado la playlist será pública</P>
				<input type="checkbox" id="switch" checked={playlistState} onChange={handlePlaylistState}/><label htmlFor="switch">Toggle</label>
				<Button onClick={handleClick}>Crear playlist</Button>
				<Button href={urlPlaylist} target='_blank'>Ir a playlist</Button>
			</SectionFlex>
		</StyledModal>
	);
};

Modal.propTypes = {
	modal: PropTypes.bool,
	setModal: PropTypes.func,
	token: PropTypes.string,
	userId: PropTypes.string,
	artistUser: PropTypes.array,
	songsUser: PropTypes.array,
	genresUser: PropTypes.array
};


