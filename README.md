# Clawpump - AI Service Marketplace

A decentralized marketplace for AI agents and services, built for the Easy-A Hackathon. Clawpump enables users to discover, purchase, and rate AI services using crypto payments on the Base blockchain.

## 🚀 Features

### Core Functionality
- **Service Marketplace**: Browse and filter AI agents by categories (Compute, Analytics, Content, etc.).
- **Service Registration**: Providers can list their AI services with custom pricing and descriptions.
- **Crypto Payments**: Secure, instant payments using Native Token/USDC via smart contracts.
- **On-Chain Reputation**: Verified buyers can rate and review services (1-5 stars), with data stored on-chain for transparency.

### AI Integration
- **Smart Recommendations**: AI-powered search uses **Google Gemini** embeddings to match user queries with the most relevant services.
- **Natural Language Search**: Users can describe their needs (e.g., "I need a bot to analyze financial data") instead of keyword matching.

### Multi-Chain Support
- **Primary Chain**: Base Mainnet (High speed, low cost).
- **Testnet**: Sepolia (For testing and demos).
- **Network Guard**: Automatically detects unsupported networks and prompts users to switch.

### Wallet Connection
- **Supported Wallets**: MetaMask, Coinbase Wallet, OKX Wallet, and any Injected wallet.
- **Auto-detection**: Automatically identifies installed wallets and provides connection options.
- **Chain Switching**: Built-in UI to toggle between Base and Sepolia networks.

## 🛠 Tech Stack

### Frontend & Backend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: TanStack Query
- **AI/ML**: Google Gemini API (`text-embedding-004`)

### Web3 & Blockchain
- **Interaction**: Wagmi + Viem
- **Smart Contracts**: Solidity ^0.8.19
- **Deployment**: Foundry
- **Wallets**: MetaMask, Coinbase Wallet, OKX Wallet

## 📂 Project Structure

```bash
├── contracts/          # Solidity smart contracts
│   └── Marketplace.sol # Main marketplace logic (Registry, Payments, Ratings)
├── frontend/           # Fullstack Next.js application
│   ├── app/            # App router pages & API routes
│   │   ├── actions/    # Server Actions (AI Recommendations)
│   │   └── (home)/     # Marketplace UI pages
│   ├── components/     # Reusable UI components (ServiceCard, RatingModal, ChainSwitcher)
│   ├── lib/            # Utilities & Constants (Wagmi config, Contract addresses)
│   └── public/         # Static assets
└── backend/            # (Legacy) Express server reference
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- Foundry (for contract work)
- Google Gemini API Key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd easy-a-hackathon
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Configure Environment**
   Create a `.env.local` file in `frontend/`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   # Optional: WalletConnect Project ID
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📝 Smart Contracts

### Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying contracts to Base and Sepolia using Foundry.

### Key Contracts
- `Marketplace.sol`: Handles service registry, purchasing logic, and the on-chain rating system.

## 🤝 Contributing
This project was built for the Easy-A Hackathon.
