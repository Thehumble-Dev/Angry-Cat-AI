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
						src='foot.svg'
						alt='dolan'
					/>
					<VStack align='flex-start'>
						<a href='#home'>
							<Button
								fontWeight={500}
								variant='link'
							>
								Home
							</Button>
						</a>
						<a href='#buy'>
							<Button
								fontWeight={500}
								variant='link'
							>
								HOW To BUY
							</Button>
						</a>
						<a href='#dolanomics'>
							<Button
								fontWeight={500}
								variant='link'
							>
								TOKENOMICS
							</Button>
						</a>
						<a href='#roadmap'>
							<Button
								fontWeight={500}
								variant='link'
							>
								ROADMAP
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
						href='https://t.me/dolantoken'
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
						href='https://twitter.com/dolan_token'
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
					<WalletButton/>
				</Flex>
			</Flex>
		</Container>
	);
};

export default LastNav;