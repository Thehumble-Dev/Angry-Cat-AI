import { Box, Container, Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React from 'react';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import Claim from './pages/Claim';
import Dolanomics from './pages/Dolanomics';
import Roadmap from './pages/Roadmap';
import LastNav from './pages/LastNav';
import '@rainbow-me/rainbowkit/styles.css';

const App = () => {
	return (
		<Flex
			direction='column'
			minH='100vh'
			w='100vw'
		>
			<TopBar />
			<Container
				maxW='container.xl'
				py={['2', '12', '28']}
				id='home'
			>
				<Home />
			</Container>
			<Box id='buy'>
				<HowToBuy />
			</Box>
			<Container
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
			</Box>
			<Container
				maxW='container.xl'
				py={['12', '28']}
				id='roadmap'
			>
				<Roadmap />
			</Container>
			<Box borderTop='6px solid black'>
				<LastNav />
			</Box>
			<Footer />
		</Flex>
	);
};

export default App;
