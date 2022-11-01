import {
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
	Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { BsWallet } from 'react-icons/bs';

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
					</VStack>
				</DrawerBody>
				<Divider />
				<DrawerFooter justifyContent='center'>
					<ChakraLink
						target='_blank'
						href=''
					>
						<Button
							leftIcon={<BsWallet size='22px' />}
							variant='solid'
							bgColor='brand.ternary'
							_hover={{
								bgColor: 'brand.ternary',
							}}
							color='white'
						>
							<Text fontSize='18px'>Connect Wallet</Text>
						</Button>
					</ChakraLink>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default SideDrawer;
