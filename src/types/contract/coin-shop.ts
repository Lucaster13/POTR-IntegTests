import type { EventMap, EventStream } from "@reach-sh/stdlib/dist/types/shared_impl";
import { CoinIds, Coins } from "../coin";
import { AsaId, NetworkAddress } from "../network";
import { DeployerInterface, ApiFn, ContractHandle, Maybe, ParticipantInterface, ViewFn } from "./base";

/*

    COIN SHOP TYPES

*/

// Interface for running contract as admin
interface CoinShopDeployerInterface extends DeployerInterface {
    // pass in coin asa ids
    coin_asa_ids: CoinIds;
}

type CoinShopAdminInterface = ParticipantInterface;

// names for all events, views and apis
type CoinShopEvent = "restock" | "purchase" | "price_change" | "withdraw";
type CoinShopView = "is_paused" | "coin_prices" | "coin_supply";
type CoinShopBuyerApiFunction = "purchase_bronze" | "purchase_silver" | "purchase_gold";
type CoinShopControllerApiFunction = "restock" | "set_prices" | "toggle_pause" | "terminate" | "withdraw";

// types for all view values
type CoinShopPrices = Coins;
type CoinShopSupply = Coins;
type CoinShopIsPaused = boolean;

// interfaces for APIS
interface CoinShopControllerApi extends Record<CoinShopControllerApiFunction, ApiFn> {
    restock: (sup: CoinShopSupply) => Promise<boolean>;
    set_prices: (pr: CoinShopPrices) => Promise<boolean>;
    toggle_pause: () => Promise<boolean>;
    terminate: () => Promise<boolean>;
    withdraw: () => Promise<boolean>;
}
interface CoinShopBuyerApi extends Record<CoinShopBuyerApiFunction, ApiFn> {
    purchase_bronze: () => Promise<boolean>;
    purchase_silver: () => Promise<boolean>;
    purchase_gold: () => Promise<boolean>;
}

// interfaces for View
interface CoinShopViews extends Record<CoinShopView, ViewFn> {
    coin_supply: () => Promise<Maybe<CoinShopSupply>>;
    coin_prices: () => Promise<Maybe<CoinShopPrices>>;
    is_paused: () => Promise<Maybe<boolean>>;
}

// interfaces for Events
interface CoinShopEvents extends Record<CoinShopEvent, EventMap> {
    restock: EventStream<Coins>;
    purchase: EventStream<[AsaId, NetworkAddress]>;
    price_change: EventStream<Coins>;
    withdraw: EventStream<Coins>;
    terminate: EventStream<boolean>;
}

interface CoinShopApi {
    controller_api: CoinShopControllerApi;
    buyer_api: CoinShopBuyerApi;
}

interface CoinShopHandle extends ContractHandle {
    a: CoinShopApi;
    v: CoinShopViews;
    e: CoinShopEvents;
    p: {
        Admin: (x: CoinShopAdminInterface) => Promise<void>;
        Deployer: (x: Partial<CoinShopDeployerInterface>) => Promise<void>;
    };
}

export {
    CoinShopDeployerInterface,
    CoinShopAdminInterface,
    CoinShopEvent,
    CoinShopView,
    CoinShopPrices,
    CoinShopSupply,
    CoinShopIsPaused,
    CoinShopControllerApi,
    CoinShopBuyerApi,
    CoinShopApi,
    CoinShopHandle,
    CoinShopEvents,
};
