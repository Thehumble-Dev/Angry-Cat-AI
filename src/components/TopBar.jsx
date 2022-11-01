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

const TopBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<Box
			shadow='md'
			bgColor='brand.primary'
			px={['8',null,'12']}
			py={['4',null,'6']}
		>
			<Flex
				align='center'
				justify='center'
			>
				<HStack spacing='9'>
					<Image
						src='logo.png'
						h='auto'
					/>
					<HStack
						spacing='8'
						display={{
							base: 'none',
							lg: 'initial',
						}}
					>
						<Button
							color='white'
							fontWeight={500}
							variant='link'
						>
							Home
						</Button>
						<Button
							color='white'
							fontWeight={500}
							variant='link'
						>
							HOW To BUY
						</Button>
						<Button
							color='white'
							fontWeight={500}
							variant='link'
						>
							TOKENOMICS
						</Button>
						<Button
							color='white'
							fontWeight={500}
							variant='link'
						>
							ROADMAP
						</Button>
					</HStack>
				</HStack>
				<Spacer />
				<Button
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
				</Button>
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
