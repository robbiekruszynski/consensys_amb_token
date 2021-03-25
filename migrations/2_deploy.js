const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "ConsenSys Ambassador","AMB", "https://my-json-server.typicode.com/robbiekruszynski/AMB_db/tokens/");
};