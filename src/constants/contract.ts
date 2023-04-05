const enum Participants {
    ADMIN = "Admin",
    SUMMONER = "Summoner",
    DEPLOYER = "Deployer"
}

const enum TaskStatus {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
    IN_PROGRESS = "IN_PROGRESS"
}

const enum SummonTask {
    START_SUMMON = "start_summon",
    PAY_COIN = "pay_coin",
    PREPARE_POTR = "prepare_potr",
    DEPOSIT_POTR = "deposit_potr",
    CLAIM_POTR = "claim_potr"
}

// convenience for higher-order functions
const SUMMON_TASKS: SummonTask[] = [
    SummonTask.START_SUMMON,
    SummonTask.PAY_COIN,
    SummonTask.PREPARE_POTR,
    SummonTask.DEPOSIT_POTR,
    SummonTask.CLAIM_POTR
];

const enum CoinShopView {
    COIN_SUPPLY = "coin_supply",
    COIN_PRICES = "coin_prices",
    IS_PAUSED = "is_paused"
}
const enum CoinShopApi {
    RESTOCK = "restock",
    SET_PRICES = "set_prices",
    TERMINATE = "terminate",
    TOGGLE_PAUSE = "toggle_pause",
    WITHDRAW = "withdraw"
}

const enum CoinShopEvent {
    RESTOCK = "restock",
    PURCHASE = "purchase",
    PRICE_CHANGE = "price_change",
    WITHDRAW = "withdraw",
    TERMINATE = "terminate"
}

const enum ContractName {
    COIN_SHOP = "coin_shop",
    SUMMON = "summon"
}

export { CoinShopEvent, TaskStatus, ContractName, SummonTask, CoinShopView, CoinShopApi, Participants, SUMMON_TASKS };
