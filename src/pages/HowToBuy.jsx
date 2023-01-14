import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SwapWidgetPanel from '../components/SwapWidgetPanel';
import { ArrowDownIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

const HowToBuy = () => {
	return (
		<Box
			width='100%'
			backgroundImage='url(Group.svg)'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			backgroundPosition='center'
		>
			{/* <Box position='absolute'>
				<Image
					src='Group.svg'
					alt='waves'
				/>
			</Box> */}
			<Container
				maxW='100%'
				py={['2', '12', '28']}
			>
				{/* <Container
					maxW='container.xl'
					py={['2', '12', '28']}
					position='relative'
				> */}
				<Flex
					justify='center'
					align='center'
					minH={700}
				>
					<VStack align='center'>
						<Text
							color='brand.yellow'
							fontSize='5xl'
							align='center'
						>
							BUY Angry Cat AI
						</Text>
						<Text
							color='brand.yellow'
							fontSize='3xl'
							align='center'
						>
							BUY BELOW{' '}
							<ArrowDownIcon
								w={6}
								h={6}
							/>
						</Text>
						<Box>
							<SwapWidgetPanel />
						</Box>
					</VStack>
				</Flex>
			</Container>
			{/* </Container> */}
		</Box>
	);
};

export default HowToBuy;
