import React from 'react';
import { SwapWidget } from '@uniswap/widgets';
// import '@uniswap/widgets/dist/fonts.css';

const theme = {
	primary: '#001D82',
	secondary: '#6677C1',
	interactive: '#005BAE',
	container: '#ABD6FE',
	module: '#FFF7FB',
	accent: '#FF7BC2',
	outline: '#ABD6FE',
	dialog: '#FFF',
	fontFamily: 'Arvo',
	borderRadius: 1,
};

const SwapWidgetPanel = () => {
	return (
		<div className='Uniswap'>
			<SwapWidget />
		</div>
	);
};

export default SwapWidgetPanel;
