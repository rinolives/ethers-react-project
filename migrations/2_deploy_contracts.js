const Adder = artifacts.require("Adder");

module.exports = async function (deployer) {
  const resp = await deployer.deploy(Adder);
};
