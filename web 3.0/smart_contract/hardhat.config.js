//https://eth-goerli.g.alchemy.com/v2/rB54v3QAvW0f95ghhDztxaOT6yT4FnD9

// require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rB54v3QAvW0f95ghhDztxaOT6yT4FnD9",
      accounts: ["aea78c66fb9050156159c53fd54fd4d1ca59d8b28a78428fe860f08e8ee792ab"]
    }
  }
};

//0x6df056b5a0c739f321FF7d37E2082a7A4292d71B