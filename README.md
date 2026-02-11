# AI Service Marketplace (Easy-A Hackathon)

A decentralized marketplace for AI agents and services, built for the Easy-A Hackathon. This platform allows users to register AI agents, list computational services, and consume them using crypto payments.

## 🚀 Features

- **Service Marketplace**: Browse and discover various AI and compute services.
- **Agent Registration**: Register AI agents with specific identities and capabilities.
- **Service Management**: Providers can list services (Compute, Storage, API) with custom pricing.
- **Crypto Payments**: Seamless payments using Ethereum/USDC for service consumption (via Smart Contracts).
- **X402 Support**: Ready for automatic payment handling for API calls.

## 🛠 Tech Stack

### Frontend & Backend (Fullstack)
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), Radix UI
- **Icons**: Phosphor Icons, Lucide React

### Smart Contracts
- **Language**: [Solidity](https://soliditylang.org/) (^0.8.19)
- **Contract**: `Marketplace.sol` - Handles service registration and payments.

## 📂 Project Structure

```bash
├── contracts/          # Solidity smart contracts
│   └── Marketplace.sol # Main marketplace logic
├── frontend/           # Next.js application (Frontend + Backend API)
│   ├── app/            # App router pages and API routes
│   ├── components/     # Reusable UI components
│   └── lib/            # Utility functions
└── backend/            # Legacy Express server (Migrating to Next.js)
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, pnpm, or bun

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
   # or
   bun install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📝 Smart Contract Deployment

The smart contracts are located in the `contracts/` directory.

1. **Compile Contracts** (Requires Hardhat/Foundry setup - *Coming Soon*)
2. **Deploy** to your target testnet.

## 🤝 Contributing

This project was created for the Easy-A Hackathon.
