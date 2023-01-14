import React from 'react';
import { SwapWidget } from '@uniswap/widgets';

const theme = {
	primary: '#000',
	secondary: '#000',
	interactive: '#F9FAFB',
	container: '#f7d408',
	module: '#F9FAFB',
	accent: '#4772F5',
	dialog: '#FFF',
	borderRadius: 2,
};

const GOO = '0xdCABdBDf086E1b0398418cdd10F8fbbf827cbb0B';

const MY_TOKEN_LIST = [
	{
		name: 'GOO',
		address: '0xdCABdBDf086E1b0398418cdd10F8fbbf827cbb0B',
		symbol: 'GOO',
		decimals: 18,
		chainId: 1,
		logoURI:
			'https://github.com/robpatterson9/nothing0/blob/master/public/lfg.png',
	},
	{
		name: 'fuckKanye',
		address: '0x43aBD8d157D84416E5ec28DCE0264eb8b5A0d971',
		symbol: 'FCKYE',
		decimals: 18,
		chainId: 1,
		logoURI:
			'https://github.com/robpatterson9/nothing0/blob/master/public/lfg.png',
	},
];

const SwapWidgetPanel = () => {
	return (
		<div
			className='Uniswap'
			style={{
				border: '6px solid black',
				borderRadius: 20,
			}}
		>
			<SwapWidget
				tokenList={MY_TOKEN_LIST}
				defaultOutputTokenAddress={GOO}
				theme={theme}
			/>
		</div>
	);
};

export default SwapWidgetPanel;
