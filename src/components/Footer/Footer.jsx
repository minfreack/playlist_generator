import React from 'react';
import { Img } from '../Commons/Img';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import spotify from '../Images/spotify.svg';

export const Footer = () => {
	return (
		<SectionFlex variant direction="row" align="center" margin=".5rem" justify="center">
			<P>Esta aplicación funciona con ayuda de </P>
			&nbsp;
			<Img src={spotify} width={30}></Img>
		</SectionFlex>
	);
};
