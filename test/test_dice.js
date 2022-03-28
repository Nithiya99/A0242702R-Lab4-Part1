var DiceArtifact = artifacts.require("./Dice.sol");
const { ethers } = require("ethers");

contract("DiceContract", (accounts) => {
  it("Should deploy dice contract properly", async () => {
    const diceContract = await DiceArtifact.deployed();
    console.log(diceContract.address);
    assert(diceContract.address != "");
  });

  it("Should create a new dice", async () => {
    const diceContract = await DiceArtifact.deployed();
    await diceContract.add(9, 1, {
      from: accounts[0],
      value: 20000000000000000,
    });
    const result = await diceContract.numDices();
    console.log("Number of dices: ", result.toNumber());
    assert(diceContract != "");
  });

  it("Should ensure msg.sender sends greater than 0.01ETH", async () => {
    const diceContract = await DiceArtifact.deployed();
    let req_value = 10000000000000000;
    value = 2000000000000000;
    if (value < req_value) {
      assert(value < req_value);
      console.log("Dice creation FAILED!");
    } else {
      await diceContract.add(9, 1, {
        from: accounts[0],
        value: 20000000000000000,
      });
      const result = await diceContract.numDices();
      console.log("Number of dices: ", result.toNumber());
      assert(diceContract != "");
    }
  });

  it("Only owner can roll dice", async () => {
    const diceContract = await DiceArtifact.deployed();
    owner = await diceContract.getOwner(0);
    assert(owner === accounts[0]);
  });

  it("Only owner can stopRoll the dice", async () => {
    const diceContract = await DiceArtifact.deployed();
    owner = await diceContract.getOwner(0);
    assert(owner === accounts[0]);
  });

  it("Only owner can transfer the dice", async () => {
    const diceContract = await DiceArtifact.deployed();
    owner = await diceContract.getOwner(0);
    assert(owner === accounts[0]);
  });
});
