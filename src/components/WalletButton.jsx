import { useEffect, useState } from 'react';
import { useDisclosure, Button, Text } from '@chakra-ui/react';
import SelectWalletModal from './WebModal';
import { useWeb3React } from '@web3-react/core';
import { connectors } from './connectors';

export default function WalletButton() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { library, chainId, account, activate, deactivate, active } =
		useWeb3React();
	const [signature, setSignature] = useState('');
	const [error, setError] = useState('');
	const [network, setNetwork] = useState(undefined);
	const [message, setMessage] = useState('');
	const [signedMessage, setSignedMessage] = useState('');
	const [verified, setVerified] = useState();

	const refreshState = () => {
		window.localStorage.setItem('provider', undefined);
		setNetwork('');
		setMessage('');
		setSignature('');
		setVerified(undefined);
	};

	const disconnect = () => {
		refreshState();
		deactivate();
	};

	useEffect(() => {
		const provider = window.localStorage.getItem('provider');
		if (provider) activate(connectors[provider]);
	}, []);

	return (
		<>
			{!active ? (
				<Button
					onClick={onOpen}
					
					fontWeight={500}
					variant='solid'
					bgColor='brand.ternary'
					_hover={{
						bgColor: 'brand.ternary',
					}}
					color='white'
				>
					CONNECT WALLET
				</Button>
			) : (
				<Button
					onClick={disconnect}
				
					fontWeight={500}
					variant='solid'
					bgColor='green'
					_hover={{
						bgColor: 'green',
					}}
					color='white'
				>
					DISCONNECT
				</Button>
			)}

			{/* <Text>{error ? error.message : null}</Text> */}
			<SelectWalletModal
				isOpen={isOpen}
				closeModal={onClose}
			/>
		</>
	);
}
