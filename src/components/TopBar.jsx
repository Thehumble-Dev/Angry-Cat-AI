import {
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Image,
	Spacer,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import SideDrawer from './SideDrawer';
import { HiMenu } from 'react-icons/hi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import WalletButton from './WalletButton';

//#f7d408 : yellow
//#4e109a : purple
const width = window.innerWidth

const TopBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<Box
			shadow='md'
			bgColor='brand.primary'
			px={['8', null, '12']}
			py={['4', null, '6']}
		>
			<Flex
				align='left'
				justify='left'
			>
				<HStack spacing="50">
					<Image
						src='logo.png'
						h='70'
					/>
					<Spacer />
					<HStack
						spacing='12'
						display={{
							base: 'none',
							lg: 'initial',
						}}
					>
						<a href='#home'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
								
							>
								HOME
							</Button>
						</a>
						<a href='#buy'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
							>
								HOW TO BUY
							</Button>
						</a>
						<a href='#dolanomics'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
							>
								TOKENOMICS
							</Button>
						</a>
						<a href='#roadmap'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
							>
								ROADMAP
							</Button>
						</a>
					</HStack>
				</HStack>
				
				{/* <Button
					display={{
						base: 'none',
						lg: 'flex',
					}}
					fontWeight={500}
					variant='solid'
					bgColor='brand.ternary'
					_hover={{
						bgColor: 'brand.ternary',
					}}
					color='white'
				>
					CONNECT WALLET
				</Button> */}
				{/* <Box
					display={{
						base: 'none',
						lg: 'flex',
					}}
				>
					<WalletButton />
				</Box> */}
				<Spacer />
				<IconButton
					ref={btnRef}
					onClick={onOpen}
					variant='ghost'
					color='brand.ternary'
					aria-label='hamburger menu'
					fontSize='40px'
					size='lg'
					icon={<HiMenu />}
					display={{
						base: 'flex',
						lg: 'none',
					}}
				/>
			</Flex>
			<SideDrawer
				isOpen={isOpen}
				onClose={onClose}
				btnRef={btnRef}
			/>
		</Box>
	);
};

export default TopBar;
