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
		primary: '#2e1500',
		secondary: '#4772F5',
		ternary: '#FFB50C',
		yellow: "#f7d408"
	},
};

const theme = extendTheme({ colors, config, fonts });

export default theme;
