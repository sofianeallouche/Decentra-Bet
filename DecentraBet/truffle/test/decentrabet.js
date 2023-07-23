//import du contrat DeentraBet 
const DecentraBet = artifacts.require("./DecentraBet.sol");
// import des defferentes dependances
const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');


contract("DecentraBet", (accounts) => {
    let decentraBet;
    //on difinit les diferents comptes 
    const owner = accounts[0];
    const user1 = accounts[1];


    beforeEach(async() => {
        //on crée une instance du contrat
        decentraBet = await DecentraBet.new({ from: owner });
    });

    //test e la fonction plceBet
    describe('placeBet', () =>
        it("should place a bet", async() => {
            const amount = new BN(100);
            const odds = new BN(3);
            const receipt = await decentraBet.placeBet(odds, { from: user1, value: amount });
            await expectEvent(receipt, 'BetPlaced', { betId: new BN(0), user: user1, amount });
        }),
        it("should revert when amount is zero", async() => {
            const amount = new BN(0);
            const odds = new BN(2);

            await expectRevert(decentraBet.placeBet(odds, { from: user1, value: amount }),
                'le montant doit etre superieur a zero', );
        })


    )

    // tests de la fonction setBetResult 
    describe('setBetResult', () => {
                beforeEach(async() => {
                    const amount = new BN(100);
                    const odds = new BN(2);
                    await decentraBet.placeBet(odds, { from: user1, value: amount });
                })
                it("should set the result of a bet", async() => {
                        const betId = new BN(0);
                        const win = true;
                        const receipt = await decentraBet.setBetResult(betId, win, { from: user1 });
                        await expectEvent(receipt, 'BetResult', { betId, win, paid: true });
                    }),
                    it("should revert when the bet is already paid ", async() => {
                        const betId = new BN(0);
                        const win = true;
                        await decentraBet.setBetResult(betId, win, { from: owner });
                        await expectRevert(decentraBet.setBetResult(betId, win, { from: owner, }),
                            'Ce paris est payé', );
                    })
                it("should update the user balance when the bet is won", async() => {
                    const betId = new BN(0);
                    const win = true;
                    const receipt = await decentraBet.setBetResult(betId, win, { from: owner });
                    expectEvent(receipt, 'BetResult', { betId, win, paid: true });
                    const userBalance = await decentraBet.balances(user1);
                    expect(userBalance).to.bignumber.equal(new BN(200));

                })
            }

        )
        // tests de la fnction withdraw
    describe('withdraw', () => {

            it("should withdraw the user balance", async() => {
                    const amount = new BN(100);
                    const win = true;
                    await decentraBet.setBetResult(0, win, { from: owner });

                    const initialBalance = new BN(await web3.eth.getBalance(user1));
                    const receipt = await decentraBet.withdraw({ from: user1 });
                    const finalBalance = new BN(await web3.eth.getBalance(user1));

                    expectEvent(receipt, 'BetResult', { betId: new BN(0), win: false, paid: true });
                    expect(finalBalance, sub(initialBalance)).to.be.bignumber.equal(amount);
                }),
                it("should revert when the user balance is zero ", async() => {

                    await expectRevert(decentraBet.withdraw({ from: user1, }),
                        'aucun fonds disponible pour le retrait', );
                })

        }

    )
});