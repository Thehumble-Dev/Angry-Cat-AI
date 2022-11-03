import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
	return (
		<Center p={2}>
			<FaRegCopyright
				style={{
					display: 'inline-block',
					fontSize: 22,
				}}
			/>{' '}
			<Text align='center'>2022 DOLAN</Text>
		</Center>
	);
};

export default Footer;
