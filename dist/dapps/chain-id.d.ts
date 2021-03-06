import { JSONSchema, ValidateFunction } from '../validation';
import { ChainName } from './chain-name';
/**
 * Different supported chain ids
 * @alpha
 */
export declare enum ChainId {
    ETHEREUM_MAINNET = 1,
    HARMONY_TESTNET = 1666700000,
    ETHEREUM_ROPSTEN = 3,
    ETHEREUM_RINKEBY = 4,
    ETHEREUM_GOERLI = 5,
    ETHEREUM_KOVAN = 42,
    MATIC_MAINNET = 137,
    MATIC_MUMBAI = 80001
}
/**
 * Get the chain name by chain id
 * @alpha
 */
export declare function getChainName(chainId: ChainId): ChainName | null;
/**
 * Get the chain name by chain id
 * @alpha
 */
export declare function getURNProtocol(chainId: ChainId): string;
/**
 * @alpha
 */
export declare namespace ChainId {
    const schema: JSONSchema<ChainId>;
    const validate: ValidateFunction<ChainId>;
}
//# sourceMappingURL=chain-id.d.ts.map