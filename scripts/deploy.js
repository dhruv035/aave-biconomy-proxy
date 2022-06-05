async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AaveBiconomyForwarder = await ethers.getContractFactory("AaveBiconomyForwarder");
  const forwarder= "0x9399BB24DBB5C4b782C70c2969F58716Ebbd6a3b"
  const token = await AProxy.deploy(forwarder);

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });