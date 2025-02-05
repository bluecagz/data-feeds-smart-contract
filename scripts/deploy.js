const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const FeedAggregator = await hre.ethers.getContractFactory("FeedAggregator");
  const feedAggregator = await FeedAggregator.deploy();

  console.log("FeedAggregator contract deployed to:", feedAggregator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
