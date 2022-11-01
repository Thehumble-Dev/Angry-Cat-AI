import {
	Button,
	Flex,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';

const Home = () => {
	return (
		
			<Flex
				direction={['column', null, 'row']}
				justify='space-between'
				w='100%'
			>
				<VStack
					flex={2}
					align='flex-start'
					spacing='6'
					maxW='2xl'
				>
					<Text
						color='brand.secondary'
						fontSize='6xl'
						align='center'
					>
						DOLAN COIN
					</Text>
					<Text>
						Dolan offers power and opportunity to the people— to the
						underdogs—instead of venture capitalists and hedge money by fusing
						the power of memes with genuine utility and charitableness.
						<br /> <br />
						Dolan wants to be the world's most widely used and most
						used cryptocurrency.
					</Text>
					<Text color='red.600'>
						Please set slippage to 4 for uniswap and pancakeswap
					</Text>
					<Flex
						gap='20px'
						direction={['column', null, 'row']}
						align='flex-start'
					>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='teal.400'
							color='white'
						>
							BUY ON PANCAKESWAP
						</Button>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='#FEE7EF'
							color='pink.400'
						>
							BUY ON UNISWAP
						</Button>
					</Flex>
					<Flex gap='20px'>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='#00BB68'
						>
							TWITTER
						</Button>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='#189BD9'
						>
							TELEGRAM
						</Button>
					</Flex>
				</VStack>
				<Flex
					justify='center'
					flex={1}
					my={8}
				>
					<Image src='dolan.png' />
				</Flex>
			</Flex>
		
	);
};

export default Home;
