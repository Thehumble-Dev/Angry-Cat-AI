import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const firebaseConfig = {
	apiKey: "AIzaSyD896LulawX9c6-3gAIY_X40d1zoYobV_M",
	authDomain: "dolan-8a424.firebaseapp.com",
	projectId: "dolan-8a424",
	storageBucket: "dolan-8a424.appspot.com",
	messagingSenderId: "109043092617",
	appId: "1:109043092617:web:cdd12d552228db3d5e8a58",
	measurementId: "G-7KEC7TGCMJ"
  };

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
				Dolan token is the first of its kind on the Ethereum blockchain. 
				Dolan strives to become one of the largest meme tokens in the Crypto space, utilizing aggressive marketing tactics and decreasing sell pressure through various utilities.
				</Text>
				<Text color='red.600'>Please set slippage to 12 on Uniswap</Text>
				<Flex
					gap='20px'
					direction={['column', null, 'row']}
					align='flex-start'
				>
					{/* <Button
						href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xdCABdBDf086E1b0398418cdd10F8fbbf827cbb0B'
						target='_blank'
						rel='noreferrer'
						border='1px solid black'
						py={8}
						fontWeight={400}
						bgColor='teal.400'
						color='white'
					>
						BUY ON PANCAKESWAP
					</Button> */}
					<a
						href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xdCABdBDf086E1b0398418cdd10F8fbbf827cbb0B'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='#FEE7EF'
							color='pink.400'
						>
							BUY ON UNISWAP
						</Button>
					</a>
				</Flex>
				<Flex gap='20px'>
					<a
						href='https://twitter.com/dolan_token'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='#00BB68'
						>
							TWITTER
						</Button>
					</a>
					<a
						href='https://t.me/dolantoken'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							border='1px solid black'
							py={8}
							fontWeight={400}
							bgColor='#189BD9'
						>
							TELEGRAM
						</Button>
					</a>
				</Flex>
			</VStack>

			<Flex
				justify='center'
				flex={1}
				my={8}
			>
				<Box
					position='relative'
					_after={{
						content: "''",
						position: 'absolute',
						background: 'rgba(0,0,0,0.6)',
						width: '100%',
						height: '14px',
						borderRadius: '70%',
						filter: 'blur(5px)',
					}}
				>
					<Image
						src='dolan.png'
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Home;
