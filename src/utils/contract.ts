import {
    BigNumber,
    ContractId,
    DeployerInterface,
    NetworkAccount,
    NetworkAddress,
    ParticipantInterface,
} from "../types";

// turn contract deployment into promise that resolves when "deployed" interact fn is called
const deployContract = async <T extends DeployerInterface>(
    deployer: NetworkAccount,
    backend: any,
    participantName: string,
    participantInterface: Partial<T>,
    fullWait = false,
): Promise<[BigNumber, NetworkAddress]> => {
    if (fullWait) {
        let ctcId;
        let ctcAddr;
        await deployer.contract(backend).participants[participantName]({
            ...participantInterface,
            // when deployed is called, call the response callback with the contract info
            deployed: (id: BigNumber, addr: NetworkAddress) => {
                ctcId = id;
                ctcAddr = addr;
            },
        });
        return [ctcId, ctcAddr];
    }

    return new Promise((res) => {
        deployer.contract(backend).participants[participantName]({
            ...participantInterface,
            // when deployed is called, call the response callback with the contract info
            deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => {
                res([ctcId, ctcAddr]);
            },
        });
    });
};

// attach user account to the given contract and provide interact, caller can await contract completion if they choose
const attachContract = async <T extends ParticipantInterface>(
    acc: NetworkAccount,
    backend: any,
    ctcId: ContractId | BigNumber,
    participantName: string,
    participantInterface: T,
) => acc.contract(backend, ctcId).participants[participantName](participantInterface);

export { deployContract, attachContract };
