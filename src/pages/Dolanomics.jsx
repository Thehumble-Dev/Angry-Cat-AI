import { Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import { FaPercentage } from 'react-icons/fa';
import React from 'react';

const Dolanomics = () => {
	return (
		<Container
			maxW='container.xl'
			py={['24']}
		>
			<VStack>
				<Text
					fontSize={['4xl', '5xl']}
					color='brand.secondary'
				>
					DOLANOMICS
				</Text>
				<Text
					fontSize='3xl'
					color='brand.ternary'
				>
					The beefiest tokenomics on the Ethereum Chain
				</Text>
				<Flex
					direction={{
						base: 'column',
						lg: 'row',
					}}
					pt='20'
					align='stretch'
					color='white'
					textAlign='center'
					gap='40px'
				>
					<VStack
						maxW={390}
						bgColor='brand.secondary'
						borderRadius={40}
						p={6}
						spacing='10'
					>
						<VStack spacing='8'>
							<Image src='cardlogo.svg' />
							<Text fontSize='sm'>
								On every transaction, 3
								<FaPercentage
									style={{
										display: 'inline-block',
									}}
								/>
								goes into our USDC dividend pool. Dividends can only be be
								claimed once every 24 hours and any unclaimed dividends will be
								redistributed amongst token holders.
							</Text>
						</VStack>
						<Text fontSize='lg'>USDC Reflections</Text>
					</VStack>
					<Flex
						justify='center'
						align='center'
					>
						<BsPlusLg
							fontSize='80px'
							color='white'
						/>
					</Flex>
					<VStack
						maxW={390}
						bgColor='brand.secondary'
						borderRadius={40}
						p={6}
						justify='space-between'
					>
						<VStack spacing='8'>
							<Image src='cardlogo.svg' />
							<Text fontSize='sm'>
								On every transaction, 2
								<FaPercentage
									style={{
										display: 'inline-block',
									}}
								/>{' '}
								will automatically be added to the LP to ensure deep liquidity.
							</Text>
						</VStack>
						<Text fontSize='lg'>Liquidity Pool</Text>
					</VStack>
				</Flex>
			</VStack>
		</Container>
	);
};

export default Dolanomics;
