const Router = artifacts.require('RubberduckRouter')

module.exports = function(deployer) {
  deployer.deploy(Router)
}
