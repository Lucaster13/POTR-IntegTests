import { FRONTEND_PORT, SERVER_PORT } from "./ports";

const FRONTEND_BASE_URL = `http://localhost:${FRONTEND_PORT}/#`;
const SERVER_BASE_URL = `http://localhost:${SERVER_PORT}`;
const COIN_SHOP_PREFIX = "coin-shop";
const HOME_PAGE = `${FRONTEND_BASE_URL}/Home`;
const PROFILE_PAGE = `${FRONTEND_BASE_URL}/Profile`;
const PERA_CONNECT = "https://web.perawallet.app/connect?embedded=true";
const SERVER_ENDPOINTS = {
    toggleCoinShopPause: `${COIN_SHOP_PREFIX}/toggle-pause`,
    fundUser: "/fund-user",
    cleanAlgo: "/clean-algo",
    cleanCoinShopAssets: `${COIN_SHOP_PREFIX}/clean-assets`,
    restockCoinShop: `${COIN_SHOP_PREFIX}/restock`,
};

const FULL_SERVER_ENDPOINTS = Object.entries(SERVER_ENDPOINTS).reduce((endpts, [endptName, endpt]) => {
    endpts[endptName] = `${SERVER_BASE_URL}/${endpt}`;
    return endpts;
}, {} as typeof SERVER_ENDPOINTS);

export { FRONTEND_BASE_URL, HOME_PAGE, PROFILE_PAGE, PERA_CONNECT, SERVER_ENDPOINTS, FULL_SERVER_ENDPOINTS };
