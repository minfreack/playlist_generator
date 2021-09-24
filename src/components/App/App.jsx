import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
// import { Generador } from '../Generador/Generador';
import { Welcome } from '../Welcome/Welcome';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Generador } from '../Generador/Generador';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #131313;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #EDEFF2;
  }
`;

export const App = () => {
	return (
		<>
			<Helmet>
				<title>Playlist Generator</title>
				<meta name="description" content="Playlist Generator"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
			</Helmet>
			<GlobalStyles/>
			<Router>
				<Switch>
					<Route exact path="/">
						<Welcome/>
					</Route>
					<Route exact path="/generador">
						<Generador/>
					</Route>
					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};
