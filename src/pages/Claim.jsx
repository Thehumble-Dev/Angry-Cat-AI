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
import { SwapWidget } from '@uniswap/widgets';

const GOO = "0xdCABdBDf086E1b0398418cdd10F8fbbf827cbb0B";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"


const MY_TOKEN_LIST = [
    {
    "name": "GOO",
    "address": "0xdCABdBDf086E1b0398418cdd10F8fbbf827cbb0B",
    "symbol": "GOO",
    "decimals": 18,
    "chainId": 1,
	"logoURI": "https://github.com/robpatterson9/nothing0/blob/master/public/lfg.png",

  },
    {
    "name": "USDC",
    "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "symbol": "USDC",
    "decimals": 18,
    "chainId": 1,
    "logoURI": "https://github.com/robpatterson9/nothing0/blob/master/public/lfg.png"}
	,

]

const Claim = () => {
	return (
		<><VStack
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
			{/* <Box
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
         CHeck for rewards
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
                Check
            </Button>
        </Flex>
    </Box> */}

			<iframe src="https://dolanrewards.netlify.app/" width="100%" height="300px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				mt= {10}
			>
					
	<div className='Uniswap' 
	style={{width: '100%', height: '100%', marginLeft: '0%'}}>

<Text
				color="#ff1100"
				fontSize='2xl'
				ml={12}
                marginBottom={5}
			>
				get more dolan!
				
			</Text>
				<SwapWidget tokenList={MY_TOKEN_LIST}
					defaultInputTokenAddress={USDC}
					defaultOutputTokenAddress={GOO} />
	
			</div>
			</Box>
			</VStack>
			
			</>
		
	);
};

export default Claim;