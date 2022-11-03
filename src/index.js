import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import './index.css';
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const getLibrary = (provider) => {
	const library = new ethers.providers.Web3Provider(provider);
	library.pollingInterval = 8000; // frequency provider is polling
	return library;
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
			<ChakraProvider
				theme={theme}
				resetCSS
			>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Web3ReactProvider getLibrary={getLibrary}>

				<App />
				</Web3ReactProvider>
			</ChakraProvider>
	</React.StrictMode>

	
);
