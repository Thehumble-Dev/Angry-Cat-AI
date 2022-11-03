import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'

const MAINNET_RPC_URL = 'https://eth-mainnet.g.alchemy.com/v2/_N6CgoyqUh1kZpZvBILDsib58AoHCNJK'

const injected = injectedModule()

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL
    }
  ]
})

const wallets =  onboard.connectWallet()

console.log(wallets)

if (wallets[0]) {
  // create an ethers provider with the last connected wallet provider
  const ethersProvider = new ethers.providers.Web3Provider(wallets[0].provider, 'any')

  const signer = ethersProvider.getSigner()


}
