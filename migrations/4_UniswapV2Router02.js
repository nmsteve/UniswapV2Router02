const UniswapV2Router02 = artifacts.require('UniswapV2Router02')

module.exports = function (deployer){
    deployer.deploy(UniswapV2Router02,"0x20E5c7032F802b2Ff66A40C629DDA12fE59002FE","0x87b406cb0F344559bbD6DC25180079c607E19C40")
    
}