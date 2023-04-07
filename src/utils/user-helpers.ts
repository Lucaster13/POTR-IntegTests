import { AsaId, ReachAccount } from "../types";
import { ACCOUNTS, TestIds } from "../constants";
import { makeReach } from "./stdlib";

function cleanAlgo() {
    return cy.log("cleaning algo").then(async () => {
        try {
            const { reach, user, admin } = await makeReach();

            // send user balance back to admin
            const bal = await user.balanceOf();

            const transferAmt = bal.sub(1000).sub(await reach.minimumBalanceOf(user));

            if (transferAmt.lte(0)) {
                cy.log("skipping algo transfer");
                return;
            }

            cy.log(`transferring ${transferAmt} algo to admin`);

            // subtract 1000 from the balance in order to have enough money for the transfer
            await reach.transfer(user, admin, transferAmt);
            cy.log(`successfully transferred ${transferAmt} algo to admin`);
        } catch (e) {
            cy.log("clean algo error", e);
        }
    });
}

function getTestUserBalance() {
    return cy.log("getting test user balance").then(async () => {
        const { reach } = await makeReach();
        return reach
            .newAccountFromMnemonic(ACCOUNTS.TestNet.user.traveller.mnemonic)
            .then((a: ReachAccount) => a.balanceOf())
            .then((bal) => reach.formatCurrency(bal, 2));
    });
}

function fundUser(algo: number, coins: [number, number, number], potrs: AsaId[]) {
    return cy
        .log("funding user", JSON.stringify({ algo, coins, potrs }))
        .getAsaIds()
        .then(async (asaIds) => {
            try {
                const coinIds = asaIds.TestNet.coin;
                const { reach, admin, user } = await makeReach();

                // send algo to user
                if (algo > 0) {
                    await reach.transfer(admin, user, reach.parseCurrency(algo));
                    cy.log("succesfully transferred algo to user", algo);
                }
                // opt into coin assets using user account
                if (coins.reduce((any, amt) => any || amt > 0, false)) {
                    await Promise.all(coinIds.map((coinId) => user.tokenAccept(coinId)));
                    // send coins to user with admin account
                    await Promise.all(coinIds.map((coinId, idx) => reach.transfer(admin, user, coins[idx], coinId)));
                    cy.log("succesfully transferred coins to user", coins);
                }

                if (potrs.length) {
                    // opt into potr ids
                    cy.log(JSON.stringify(potrs));
                    await Promise.all(potrs.map((potrId) => user.tokenAccept(potrId)));
                    // transfer potrs to user
                    await Promise.all(potrs.map((potrId) => reach.transfer(admin, user, 1, potrId)));
                    cy.log("succesfully transferred potrs to user", potrs);
                }

                cy.log("finished funding user");
            } catch (e) {
                cy.log("error funding user", e.message);
            }
        });
}

function connectWallet(addr: string = ACCOUNTS.TestNet.user.traveller.addr) {
    cy.stubPrompt(addr);

    // find wallet connect button
    cy.byTestId(TestIds.Nav.walletButton).click();

    // click mnemonic signer and then modal wallet connect button
    cy.byTestId(TestIds.WalletConnectModal.providerButton.mnemonic).click();
    return cy.byTestId(TestIds.WalletConnectModal.connectButton).click();
}

export { cleanAlgo, getTestUserBalance, fundUser, connectWallet };
