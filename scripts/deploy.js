async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AProxy = await ethers.getContractFactory("AProxy");
  const forwarder= "0xFD4973FeB2031D4409fB57afEE5dF2051b171104"
  const token = await AProxy.deploy(forwarder);

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });