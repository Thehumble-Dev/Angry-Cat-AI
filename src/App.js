import { Box, Container, Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React from 'react';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import Tokenomics from './pages/Tokenomics';
import LastNav from './pages/LastNav';
import '@rainbow-me/rainbowkit/styles.css';
const width = window.innerWidth;
const height = window.innerHeight;
const App = () => {
	return (
		<Flex
			direction='column'
			minH='100vh'
			w='100vw'
		>
			<TopBar />
			<Container
				maxW={"100%"}
				py={['2', '24', '24']}
				id='home'
				backgroundColor="brand.yellow"

				px={['3', '14']}
			>
				<Home />
			</Container>
			<Box
				backgroundColor="brand.primary"
				maxW={width}
				py={['2', '12', '0']}
				id='buy'>

				<HowToBuy />
			</Box>
			{/* <Container
				maxW='container.xl'
				py={['2', '12', '28']}
				id='claim'
			>
				<Claim />
			</Container>
			<Box
				bgColor='brand.primary'
				id='dolanomics'
			>
				<Dolanomics />
			</Box> */}
			<Container
				backgroundColor="brand.yellow"
				maxW={width}
				py={['2', '12', '28']}
				id='tokenomics'
			>
				<Tokenomics />
			</Container>
			<Box borderTop='6px solid black' bgColor="brand.primary">
				<LastNav />
			</Box>
			<Footer />
		</Flex>
	);
};

export default App;
