import { Social } from "./social";

export default {
    LandingPage: {
        container: "landing-page",
        dismissButton: "landing-page-dismiss-button",
    },
    Nav: {
        container: "nav",
        title: "nav-title",
        toggle: "nav-toggle",
        avatar: "nav-avatar",
        walletButton: "nav-wallet-button",
        disconnectButton: "nav-disconnect-button",
        link: {
            home: "nav-link-home",
            ruins: "nav-link-ruins",
            summon: "nav-link-summon",
            castle: "nav-link-castle",
            [Social.DISCORD]: `nav-link-${Social.DISCORD}`,
            [Social.TWITTER]: `nav-link-${Social.TWITTER}`,
        },
    },
    CoinDisplay: {
        coinBal: "coin-display-bal",
    },
    Home: {
        dashboard: {
            signIn: "dashboard-sign-in",
            profile: {
                container: "dashboard-profile",
                avatar: "dashboard-avatar",
            },
            ruins: {
                container: "dashboard-ruins",
                status: "dashboard-ruins-status",
                userCoinSupply: "dashboard-user-coin-supply",
                ruinsCoinSupply: "dashboard-ruins-coin-supply",
            },
        },
        exploreContainer: {
            ruins: "explore-ruins",
            summon: "explore-summon",
            castle: "explore-castle",
            battle: "explore-battle",
            shop: "explore-shop",
        },
    },
    Ruins: {
        container: "ruins-container",
        noWallet: "ruins-no-wallet",
        arrivingAtTheRuins: "ruins-arriving-at-ruins",
        talkingToTheBlockchain: "ruins-talking-to-the-blockchain",
        history: {
            container: "ruins-history",
            event: { container: "ruins-event", type: "ruins-event-type" },
        },
        interface: {
            container: "ruins-interface",
            status: "ruins-status",
            bronzePurchase: {
                container: "ruins-bronze-purchase",
                supply: "ruins-bronze-supply",
                price: "ruins-bronze-price",
            },
            silverPurchase: {
                container: "ruins-silver-purchase",
                supply: "ruins-silver-supply",
                price: "ruins-silver-price",
            },
            goldPurchase: {
                container: "ruins-gold-purchase",
                supply: "ruins-gold-supply",
                price: "ruins-gold-price",
            },
            purchaseButton: "ruins-purchase-button",
        },
    },
    WalletConnectModal: {
        container: "wallet-connect-modal",
        connectButton: "wallet-connect-modal-connect-button",
        providerButton: {
            myAlgo: "provider-button-my-algo",
            pera: "provider-button-pera",
            mnemonic: "provider-button-mnemonic",
        },
    },
};
