import { Social } from "./social";

const PERA_CONNECT = "https://web.perawallet.app/connect?embedded=true";
const IPFS_URL_PREFIX = "https://ipfs.io/ipfs/";

const PAGES = {
    Home: "/home",
    Profile: "/profile",
    Ruins: "/ruins",
    Summon: "/summon",
    Castle: "/castle",
};

// POTR EXTERNAL URLS
const SOCIAL_MEDIA_URLS = {
    [Social.TWITTER]: "https://twitter.com/POTR_nft",
    [Social.DISCORD]: "https://discord.gg/cZN4aY3cSs",
};

export { PAGES, PERA_CONNECT, IPFS_URL_PREFIX, SOCIAL_MEDIA_URLS };
