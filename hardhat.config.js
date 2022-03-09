require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/GcvxWXYZX80sDRzxqbwri-VoTeCDvmHk",
      accounts: ["711238059bfbee72cbf2a3185a064f29f6532ca1033371f4cdd9c5f80b3542ea"]
    },
  },
};

