import { AsaIds, ContractId, ContractIds } from "../types";
import { ContractName } from "../constants";

const DATA_PATH_PREFIX = "/Users/lucasterr/Documents/_code/Protectors-Of-The-Rand/POTR-Frontend/src/data";

const writeToJson = (json: any, fileName: string) => cy.writeFile(`${DATA_PATH_PREFIX}/${fileName}.json`, json);

const updateContractId = (id: string | number, contract: ContractName) =>
    // get contract ids
    cy
        .log("updating contract id", { contract, id })
        .readFromJson<ContractIds>("contract-ids")
        .then((contractIds) => {
            // update ContractIds
            contractIds.TestNet[contract] = id;
            return contractIds;
        })
        .then((contractIds) => cy.writeToJson(contractIds, "contract-ids"))
        .log("successfully updated contract id");
const getContractId = (contract: ContractName): Cypress.Chainable<ContractId> =>
    cy.readFromJson<ContractIds>("contract-ids").then((contractIds) => {
        // get contract id from json
        const contractId = contractIds.TestNet[contract];
        return contractId;
    });

const getContractIds = (): Cypress.Chainable<ContractIds> => cy.readFromJson<ContractIds>("contract-ids");

const getAsaIds = (): Cypress.Chainable<AsaIds> => cy.readFromJson<AsaIds>("asa-ids");

const readFromJson = <T>(fileName: string): Cypress.Chainable<T> =>
    cy.readFile(`${DATA_PATH_PREFIX}/${fileName}.json`, "utf8");

export { writeToJson, readFromJson, updateContractId, getContractId, getContractIds, getAsaIds };
