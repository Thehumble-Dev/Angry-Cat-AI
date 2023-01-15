import { Box, Flex, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// text to be inserted:
// Total supply: 1,000,000,000

// Max wallet: 2%

// Allocation
// Liquidity: 100%
// Team tokens: 0%

// Taxes:
// 5% (4% for marketing/development & 1% for liquidity)


const Tokenomics = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEffect(() => {
		window.onresize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
	}, []);

	return (
		<Flex flexDirection={"column"}>
			<Box
				textAlign={"center"}
				color='#000'
				text
				fontSize='60'
				align='center'


			>
				<Text>Tokenomics</Text>
			</Box>
			<HStack justifyContent={"space-evenly"} flexDirection={windowSize.width < 760 ? "column" : "row"}>
				<Image src="cat2.png" width="400px"></Image>
				<Flex flexDirection={"column"} textAlign={"center"} justifyContent="center" alignItems={"center"}>
					<Box fontSize="35" fontFamily="DolanBody" color="#000" textAlign={"center"} marginBottom="10" >
						<Text><li>Total supply:</li></Text>
					</Box>
					<Box fontSize="27" fontFamily="DolanBody" color="#000" textAlign={"center"} textDecoration="underline" marginBottom="3">
						<Text>1,000,000,00</Text>
					</Box>
					<Box fontSize="35" fontFamily="DolanBody" color="#000" textAlign={"center"} marginBottom="10">
						<Text><li>Max wallet:</li></Text>
					</Box>
					<Box fontSize="27" fontFamily="DolanBody" color="#000" textAlign={"center"} textDecoration="underline">
						<Text>2%</Text>
					</Box>
				</Flex>


			</HStack>
			<Box height={"100px"} borderTopWidth="5px" width="80%" borderColor={"brand.primary"} marginTop="100" marginLeft={"10vw"}></Box>
			<HStack justifyContent={"space-evenly"} flexDirection={windowSize.width < 760 ? "column" : "row"}>
				<Flex flexDirection={"column"} textAlign={"center"} justifyContent="center" alignItems={"center"}>
					<Box fontSize="35" fontFamily="DolanBody" color="#000" textAlign={"center"} marginBottom="10" >
						<Text><li>Allocation:</li></Text>
					</Box>
					<Box fontSize="27" fontFamily="DolanBody" color="#000" textAlign={"center"} textDecoration="underline" marginBottom="3">
						<Text>100% (Liquidity)</Text>
						<Text>0% (Team tokens)</Text>
					</Box>
					<Box fontSize="35" fontFamily="DolanBody" color="#000" textAlign={"center"} marginBottom="10">
						<Text><li>Taxes:</li></Text>
					</Box>
					<Box fontSize="27" fontFamily="DolanBody" color="#000" textAlign={"center"} textDecoration="underline">
						<Text>5% (4% for marketing/
							<br></br>development & 1% for liquidity)</Text>
					</Box>
				</Flex>
				<Box>
					<Image src='cat.png' width="350px"></Image>
				</Box>

			</HStack>
		</Flex >
	);
};

export default Tokenomics;
