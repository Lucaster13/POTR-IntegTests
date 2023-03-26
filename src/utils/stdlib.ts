import { loadStdlib } from "@reach-sh/stdlib";
import { REACH_NETWORK, REACH_STDLIB_ENV } from "../constants";

function createReachApi() {
    const reach = loadStdlib(REACH_STDLIB_ENV);
    reach.setProviderByName(REACH_NETWORK);
    return reach;
}

export { createReachApi };
