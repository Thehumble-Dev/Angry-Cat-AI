import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const fonts = {
	heading: `Dolan, sans-serif`,
	body: `Dolan, sans-serif`,
};

const colors = {
	brand: {
		primary: '#1B2E72',
		secondary: '#4772F5',
		ternary: '#FFB50C',
	},
};

const theme = extendTheme({ colors, config, fonts });

export default theme;
