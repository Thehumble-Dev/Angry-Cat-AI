import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SwapWidgetPanel from '../components/SwapWidgetPanel';

const HowToBuy = () => {
	return (
		<Container
			maxW='container.xl'
			py={['2', '12', '28']}
			position='relative'
		>
			<Box position='absolute'>
				<Image
					src='Group.svg'
					alt='waves'
				/>
			</Box>
			<Flex
				justify='center'
				align='center'
				position='relative'
				minH={700}
			>
				<VStack align='center'>
					<Text
						color='brand.secondary'
						fontSize='5xl'
						align='center'
					>
						HOW TO BUY
					</Text>
					<Text
						color='brand.ternary'
						fontSize='3xl'
						align='center'
					>
						HOW TO BUY DOLAN TOKEN
					</Text>
					<Box>
						<SwapWidgetPanel />
					</Box>
				</VStack>
			</Flex>
		</Container>
	);
};

export default HowToBuy;
