/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "gX8wdpwb8rjeJ7rG2ohv99REWOkts-mR";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "dde4ca9caddb09c9feb35a357d07d7f9d2e48e1e8649c13d26ee3dbe8e027685";
const MATICVIGIL_API_KEY="1ba48c273c7a79a97ec2876d6ea5823ad1a84946"


import '@typechain/hardhat';
import '@typechain/ethers-v5'
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
export default {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com/v1/1ba48c273c7a79a97ec2876d6ea5823ad1a84946",
      accounts: [ROPSTEN_PRIVATE_KEY]
    }
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
  solidity: {
    version: "0.8.10",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
}