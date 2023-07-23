const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
    deployer.deploy(SimpleStorage);
};


// const DecentraBet = artifacts.require("DecentraBet");

// module.exports = function(deployer) {
//     deployer.deploy(DecentraBet);
// };