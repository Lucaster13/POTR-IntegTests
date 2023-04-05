import { loadStdlib } from "@reach-sh/stdlib";
import { ReachAccount } from "../types";
import { ACCOUNTS, REACH_NETWORK, REACH_STDLIB_ENV } from "../constants";

const reach = loadStdlib(REACH_STDLIB_ENV);
reach.setProviderByName(REACH_NETWORK);

let admin: ReachAccount;
let user: ReachAccount;

async function makeReach() {
    // connect to user and admin account if not already connected
    if (!admin) {
        admin = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    }

    if (!user) {
        user = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);
    }

    return { reach, admin, user };
}

export { makeReach };
