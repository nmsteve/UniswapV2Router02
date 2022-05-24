const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Factory, "0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF");
};
