import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { BsWallet } from 'react-icons/bs';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import WalletButton from './WalletButton';

const SideDrawer = ({ isOpen, onClose, btnRef }) => {
	return (
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={onClose}
			finalFocusRef={btnRef}
		>
			<DrawerOverlay />
			<DrawerContent bgColor='brand.primary'>
				<DrawerHeader
					p='2'
					ml='4'
				>
					<Flex align='center'>
						<Text
							color='brand.ternary'
							fontSize='2xl'
						>
							Navigation
						</Text>
						<Spacer />
						<IconButton
							onClick={onClose}
							variant='ghost'
							color='brand.ternary'
							aria-label='Close button'
							fontSize='40px'
							size='lg'
							icon={<IoCloseSharp />}
						/>
					</Flex>
				</DrawerHeader>
				<Divider />
				<DrawerBody>
					<VStack
						alignItems='stretch'
						justifyContent='center'
						height='100%'
						width='100%'
						spacing='8'
					>
						<a href='#home'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
								onClick={onClose}
							>
								HOME
							</Button>
						</a>
						<a href='#buy'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
								onClick={onClose}
							>
								HOW TO BUY
							</Button>
						</a>
						<a href='#tokenomics'>
							<Button
								color='white'
								fontWeight={500}
								variant='link'
								onClick={onClose}
							>
								TOKENOMICS
							</Button>
						</a>
					</VStack>
				</DrawerBody>
				<Divider />
				<DrawerFooter justifyContent='center'>
					{/* <Button
							leftIcon={<BsWallet size='22px' />}
							variant='solid'
							bgColor='brand.ternary'
							_hover={{
								bgColor: 'brand.ternary',
							}}
							color='white'
						>
							<Text fontSize='18px'>Connect Wallet</Text>
						</Button> */}
					<Box>
						<WalletButton />
					</Box>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default SideDrawer;
