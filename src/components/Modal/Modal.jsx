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
		let artists = '';
		let songs = '';
		let recommendations = '';
		let recommendationsURI = '';
		let genres = '';
		const params = JSON.stringify(
			{
				'name': playlistName,
				'description': playlistDesc,
				'public': playlistState
			}
		);
		for (const artist of artistUser) {
			artists += `%2C${artist}`;
		}
		for (const song of songsUser) {
			songs += `%2C${song}`;
		}
		for (const genre of genresUser) {
			genres += `%2C${genre}`;
		}
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
			await axios.get(`https://api.spotify.com/v1/recommendations?limit=50&seed_artists=${artists.substr(3)}&seed_genres=${genres.substr(3)}&seed_tracks=${songs.substr(3)}`,{
				headers: {
					Authorization: 'Bearer '+ token,
					Accept: 'application/json',
				},
			}).then(res => {
				recommendations = res.data.tracks;
				for (const recommendation of recommendations) {
					recommendationsURI += `%2C${recommendation.uri}`;
				}
			});
			//Se crea string de URI para petición que llena playlist
			await axios.post(`https://api.spotify.com/v1/playlists/${playlistInfo.id}/tracks?uris=${recommendationsURI.substr(3)}`,{},{
				headers: {
					Authorization: 'Bearer '+ token,
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
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


