import { Container, Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React from 'react';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import Claim from './pages/Claim';

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
			>
				<Home />
				<HowToBuy />
				<Claim/>
			</Container>
			<Footer />
		</Flex>
	);
};

export default App;
