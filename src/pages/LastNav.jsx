import {
	Button,
	Container,
	Flex,
	HStack,
	Image,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import WalletButton from '../components/WalletButton';

const LastNav = () => {
	return (
		<Container
			maxW='container.xl'
			py={['10', '12', '16']}
		>
			<Flex
				px={{
					base: 0,
					xl: 20,
				}}
				direction={{
					base: 'column',
					lg: 'row',
				}}
				justify='space-between'
				align='center'
				gap={16}
			>
				<HStack spacing='10'>
					<Image
						src='logo.png'
						alt='dolan'
						height="200"
					/>
					<VStack align='flex-start'>
						<a href='#home'>
							<Button
								fontWeight={500}
								variant='link'
								color={"#fff"}
							>
								HOME
							</Button>
						</a>
						<a href='#buy'>
							<Button
								fontWeight={500}
								variant='link'
								color={"#fff"}
							>
								HOW TO BUY
							</Button>
						</a>
						<a href='#tokenomics'>
							<Button
								fontWeight={500}
								variant='link'
								color={"#fff"}
							>
								TOKENOMICS
							</Button>
						</a>

					</VStack>
				</HStack>
				<Flex
					gap={4}
					direction={{
						base: 'column',
						lg: 'row',
					}}
					align='center'
				>
					<a
						href='https://t.me/angrycatai'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							border='1px solid black'
							py={2}
							px={8}
							fontWeight={400}
							bgColor='#189BD9'
						>
							TELEGRAM
						</Button>
					</a>
					<a
						href=' https://twitter.com/AngryCatAI'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							border='1px solid black'
							py={2}
							px={12}
							fontWeight={400}
							bgColor='#00BB68'
						>
							TWITTER
						</Button>
					</a>
					{/* <Button
						border='1px solid black'
						fontWeight={400}
						variant='solid'
						bgColor='brand.ternary'
						_hover={{
							bgColor: 'brand.ternary',
						}}
					>
						CONNECT WALLET
					</Button> */}

					<a
						href='https://medium.com/@AngryCatAI/a-memecoin-for-the-ai-meta-2e3fcb4df785'
						target='_blank'
						rel='noreferrer'
					>
						<Button
							border='1px solid black'
							py={2}
							px={12}
							fontWeight={400}
							bgColor='#fff'
							color="#000"
							_hover={{ color: "#fff", bgColor: "#000" }}
						>
							MEDIUM
						</Button>
					</a>


				</Flex>
			</Flex>
		</Container>
	);
};

export default LastNav;