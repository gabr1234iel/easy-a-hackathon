// Chain IDs
export const BASE_CHAIN_ID = 8453;
export const SEPOLIA_CHAIN_ID = 11155111;

// Contract Addresses
export const CONTRACT_ADDRESSES: Record<number, `0x${string}`> = {
  [BASE_CHAIN_ID]: '0x0000000000000000000000000000000000000000', // Replace with deployed Base contract
  [SEPOLIA_CHAIN_ID]: '0x0000000000000000000000000000000000000000', // Replace with deployed Sepolia contract
};

export const SUPPORTED_CHAINS = [BASE_CHAIN_ID, SEPOLIA_CHAIN_ID];

export const DEFAULT_CHAIN_ID = BASE_CHAIN_ID;
