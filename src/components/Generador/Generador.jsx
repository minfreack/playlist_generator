import React, { useState, useEffect } from 'react';
import { Button } from '../Commons/Button';
import { Card } from '../Commons/Card';
import { H3 } from '../Commons/H3';
import { SectionFlex } from '../Commons/SectionFlex';
import { SectionGrid } from '../Commons/SectionGrid';
import { Title } from '../Commons/Title';
import { Footer } from '../Footer/Footer';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { Search } from '../Search/Search';
import axios from 'axios';

export const Generador = () => {

	// const USER_ENDPOINT = '	https://api.spotify.com/v1/me';
	
	const [token, setToken] = useState('');
	const [data, setData] = useState('');

	const getSpotifyParams = (hash) => {
		const stringAfterHashtag = hash.substring(1);
		const paramsInUrl = stringAfterHashtag.split('&');
		const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
			const [key, value] = currentValue.split('=');
			accumulator[key] = value;
			return accumulator;
		}, {});
		return paramsSplitUp;
	};

	const handleGetUser = async(access_token) => {
		await axios.get('	https://api.spotify.com/v1/me', {
			headers: {
				Authorization: 'Bearer ' +access_token,
			}
		}).then(res => {
			console.log(res.data);
			setData(res.data);
		});
	};



	useEffect(() => {
		if(window.location.hash){
			const { access_token, expires_in, token_type} = getSpotifyParams(window.location.hash);
			localStorage.clear();
			setToken(access_token);
			handleGetUser(access_token);
			localStorage.setItem('access_token', access_token);
			localStorage.setItem('expires_in', expires_in);
			localStorage.setItem('token_type', token_type);
			return token;
		}
	}, []);

	return (
		<>
			<SectionFlex variant direction="row" align="center" justify="space-between" padding=" 0 3.5rem">
				<ProfileInfo username={data.display_name}/>
				<Title>Playlist Generator</Title>
				<Button>Ir al generador</Button>
			</SectionFlex>
			<Search token={token}/>
			<SectionGrid variant>
				<Card>
					<H3>Artistas</H3>
					<SectionFlex>
					</SectionFlex>
				</Card>
				<Card>
					<H3>Canciones</H3>
				</Card>
				<Card>
					<H3>Géneros</H3>
				</Card>
			</SectionGrid>
			<Footer/>
		</>
	);
};
