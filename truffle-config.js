
require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = process.env.PRIVATE_KEYS || ""


module.exports = {
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },

  goerli: {
    provider: function() {
      return new HDWalletProvider(
        privateKeys.split(','), //Array of account private keys
        `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
      )
    },
    gas: 5000000,
    gasPrice: 25000000000,
    network_id: 5
  }
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
     optimizer: {
       enabled: true,
       runs: 200
     }
    }
  }
}
