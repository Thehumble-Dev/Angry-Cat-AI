import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
	return (
		<Center p={2} bgColor="brand.primary">
			<FaRegCopyright
				style={{
					display: 'inline-block',
					fontSize: 22,
					color:"#fff"
				}}
			/>{' '}
			<Text align='center' color="#fff">2022 Angry Cat AI</Text>
		</Center>
	);
};

export default Footer;
