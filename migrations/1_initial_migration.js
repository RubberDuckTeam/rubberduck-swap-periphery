const Contract = artifacts.require('RubberduckRouter')

module.exports = function (deployer) {
  deployer.deploy(Contract, '0xbd32fd5336EfB5EA47fC5edf327287E4610e729A', '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd')
}
