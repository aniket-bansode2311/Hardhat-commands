require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "sHd0aTJDO7NkxKsts2S3QUkppPhqFFo5";
const SEPOLIA_PRIVATE_KEY = "c22e52c662e904a1c9757bc88643472051c5db0967f1a554513127cc5637d331";

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};