import React from 'react';
import { SectionFlex } from '../Commons/SectionFlex';
import { Img } from '../Commons/Img';
import { P } from '../Commons/P';
import profile from '../Images/test.png';
import PropTypes from 'prop-types';

export const ProfileInfo = ({username}) => {


	return (
		<SectionFlex direction="row" align="center" justify="center" gap="1rem">
			<Img user src={profile} width={60}></Img>
			<P>{username}</P>
		</SectionFlex>
	);
};

ProfileInfo.propTypes = {
	username : PropTypes.string
};
