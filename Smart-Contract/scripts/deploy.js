
const hre = require("hardhat");

async function main() {
  
  const DecCart = await hre.ethers.getContractFactory("DecCart");
  const decCart = await DecCart.deploy();

  await decCart.deployed();

  console.log("DecCart contract deployed to:", decCart.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
