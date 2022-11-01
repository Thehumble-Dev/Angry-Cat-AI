import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';

const Claim = () => {
	return (
		<VStack
			align='stretch'
			px={[0, null, 10]}
		>
			<Text
				color='brand.secondary'
				fontSize='5xl'
			>
				CLAIM
			</Text>
			<Text
				color='brand.ternary'
				fontSize='3xl'
			>
				CLAIM YOUR USDC REWARDS
			</Text>
			<Box
				position='relative'
				maxW={900}
			>
				<Image
					src='imageup.svg'
					position='absolute'
					width='22%'
					zIndex={1}
				/>
				<Image
					src='imagedown.svg'
					position='absolute'
					width='15%'
					zIndex={1}
					bottom={-4}
					right={0}
					sx={{
						transform: 'scaleX(-1)',
					}}
				/>
				<Flex
					align='center'
					justify='center'
					bgColor='brand.secondary'
					borderRadius='40px'
					p='40'
					direction='column'
					gap='6'
				>
					<Text
						color='white'
						fontSize='2xl'
					>
						CLAIMABLE AMOUNT
					</Text>
					<Input
						size='lg'
						width='auto'
						bgColor='white'
					/>
					<Button
						display='flex'
						variant='unstyled'
						bgColor='brand.ternary'
						color='white'
						borderRadius='3xl'
						p='6'
					>
						CLAIM TOKENS
					</Button>
				</Flex>
			</Box>
		</VStack>
	);
};

export default Claim;
