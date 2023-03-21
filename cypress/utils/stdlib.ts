import { loadStdlib } from "@reach-sh/stdlib";
import { REACH_STDLIB_ENV } from "../constants";

function createReachApi() {
    return loadStdlib(REACH_STDLIB_ENV);
}

export { createReachApi };
