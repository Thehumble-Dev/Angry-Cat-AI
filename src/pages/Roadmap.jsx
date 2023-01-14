import { Box, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const content = {
	1: [
		'Stealth Launch',
		'Twitter engagement',
		'Telegram engagement',
		'Bring meme awareness',
		'Applications for listings',
	],
	2: [
		'Coin voting sites',
		'Twitter space tour',
		'Paid Advertisements',
		'Trending token listings',
		'Verified Socials',
	],
	3: [
		"TBA",
	],
};

const Roadmap = () => {
	return (
		<VStack>
			<Text
				fontSize='5xl'
				color='#fff'
			>
				Roadmap
			</Text>
			<SimpleGrid
				pt='10'
				columns={[1, 1, 2]}
				spacing={0}
				color='#fff'
			>
				<VStack
					align='end'
					fontSize='2xl'
					spacing='6'
					borderRight='8px solid'
					borderColor='brand.ternary'
					px='10'
					py='20'
				>
					{content[1].map((item, index) => (
						<Text
							align='right'
							fontSize='2xl'
							key={index}
						>
							{item}
						</Text>
					))}
				</VStack>
				<Box position='relative'>
					<Image
						display={['none', 'none', 'flex']}
						src='cat2.png'
						position='absolute'
						top={0}
						bottom={0}
						right={0}
						height="300"
					/>
				</Box>
				<Box
					borderRight='8px solid'
					borderBottom={['8px solid', null, 'none']}
					borderColor='brand.ternary'
					position='relative'
				>
					<Image
						src='cat.png'
						position={['relative', 'relative', 'absolute']}
						top={0}
						bottom={0}
						left={0}
						height="300"
					/>
				</Box>
				<VStack
					align='start'
					fontSize='2xl'
					spacing='6'
					px='10'
					py='20'
					borderLeft={['8px solid', null, 'none']}
					borderBottom={['8px solid', null, 'none']}
					borderColor='brand.ternary'
				>
					{content[2].map((item, index) => (
						<Text
							fontSize='2xl'
							key={index}
						>
							{item}
						</Text>
					))}
				</VStack>
				<VStack
					align='end'
					fontSize='2xl'
					spacing='6'
					borderRight='8px solid'
					borderColor='brand.ternary'
					px='10'
					py='20'
				>
					{content[3].map((item, index) => (
						<Text
							align='right'
							fontSize='3xl'
							marginRight={40}
							key={index}
						>
							{item}
						</Text>
					))}
				</VStack>
				<Box></Box>
			</SimpleGrid>
		</VStack>
	);
};

export default Roadmap;
