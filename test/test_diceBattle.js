var DiceArtifact = artifacts.require("./Dice.sol");
var DiceBattleArtifact = artifacts.require("./DiceBattle.sol");

contract("Test Battle Contract", (accounts) => {
  it("Should deploy dice contract properly", async () => {
    const diceContract = await DiceArtifact.deployed();
    console.log(diceContract.address);
    assert(diceContract.address != "");
  });

  it("Should deploy dice battle contract properly", async () => {
    const diceBattleContract = await DiceBattleArtifact.deployed();
    console.log(diceBattleContract.address);
    assert(diceBattleContract.address != "");
  });

  it("Should create myDice", async () => {
    const diceContract = await DiceArtifact.deployed();
    await diceContract.add(9, 1, {
      from: accounts[0],
      value: 20000000000000000,
    });
    const result = await diceContract.numDices();
    console.log("Number of dices: ", result.toNumber());
    assert(diceContract != "");
  });

  it("Should create enemyDice", async () => {
    const diceContract = await DiceArtifact.deployed();
    await diceContract.add(9, 1, {
      from: accounts[1],
      value: 20000000000000000,
    });
    const result = await diceContract.numDices();
    console.log("Number of dices: ", result.toNumber());
    assert(diceContract != "");
  });

  it("Only myDice owner can trigger Battle()", async () => {
    const diceContract = await DiceArtifact.deployed();
    owner = await diceContract.getOwner(0);
    assert(owner === accounts[0]);
  });
});
