# Deployment Instructions

## 1. Prerequisites
- [Foundry](https://book.getfoundry.sh/getting-started/installation) installed
- Private key exported from wallet (add to `.env` as `PRIVATE_KEY`)
- Base Scan / Etherscan API keys (add to `.env` as `BASESCAN_API_KEY`, `ETHERSCAN_API_KEY`)

## 2. Configuration
Ensure your `foundry.toml` has the correct RPC endpoints:

```toml
[rpc_endpoints]
base = "https://mainnet.base.org"
sepolia = "https://rpc.sepolia.org"
```

## 3. Deploy to Base Mainnet (Target)
```bash
forge create --rpc-url base \
  --private-key $PRIVATE_KEY \
  --etherscan-api-key $BASESCAN_API_KEY \
  --verify \
  contracts/Marketplace.sol:Marketplace
```

## 4. Deploy to Sepolia Testnet (Demo)
```bash
forge create --rpc-url sepolia \
  --private-key $PRIVATE_KEY \
  --etherscan-api-key $ETHERSCAN_API_KEY \
  --verify \
  contracts/Marketplace.sol:Marketplace
```

## 5. Update Frontend
After deployment, copy the contract addresses printed in the terminal and update `frontend/lib/constants.ts`:

```typescript
export const CONTRACT_ADDRESSES: Record<number, `0x${string}`> = {
  [BASE_CHAIN_ID]: '0x...', // Your new Base address
  [SEPOLIA_CHAIN_ID]: '0x...', // Your new Sepolia address
};
```
