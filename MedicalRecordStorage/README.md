# Medical Records Management Project

This project is a blockchain-based medical records application built with React and Solidity. It allows patient records to be stored on a smart contract, with role-based access for admins and doctors, and a browser-based UI connected to MetaMask.

## What this project does

The app is designed to manage patient information in a secure and transparent way.

- Doctors can add or remove medical records.
- Admin accounts can assign roles to wallet addresses.
- Record data is stored on the Ethereum blockchain through a Solidity contract.
- The frontend reads contract events and displays records for the user.

## How it works

1. The smart contract in `contracts/MedicalRecords.sol` defines the medical record structure and role system.
2. Roles are assigned via `setRole(address, Role)`.
3. Only authorized doctors can add or delete records.
4. The React app uses `ethers.js` to connect to MetaMask and the deployed contract.
5. Each record is stored as blockchain state, making it immutable and traceable.

## Project structure

- `contracts/MedicalRecords.sol` — Solidity contract
- `scripts/00-deploy.js` and `scripts/deploy_medical_records.js` — deployment scripts
- `src/` — frontend React app
- `hardhat.config.js` — Hardhat configuration

## Prerequisites

- Node.js 18+
- npm
- MetaMask browser extension

## Run the project locally

### 1) Install dependencies

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
npm install
```

### 2) Start local blockchain

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
npx hardhat node
```

### 3) Deploy the smart contract

Open a second terminal and run:

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
npx hardhat run scripts/deploy_medical_records.js --network localhost
```

This prints the contract address. If the app needs it, update `src/config.json` with the deployed address.

### 4) Start the frontend

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
npm start
```

### 5) Open the application

Visit:

```text
http://localhost:3000
```

### 6) Connect MetaMask

- Connect MetaMask to the local Hardhat network
- Use one of the generated accounts from the Hardhat node
- Make sure the deployed contract is accessible from that wallet

## Optional testnet deployment

If you want to deploy to Goerli or Mumbai, create a `.env` file with:

```env
PRIVATE_KEYS=your_private_key
GOERLI_API_KEY=your_key
MUMBAI_API_KEY=your_key
```

Then run:

```bash
npx hardhat run scripts/deploy_medical_records.js --network goerli
```

or

```bash
npx hardhat run scripts/deploy_medical_records.js --network mumbai
```

## Important notes

- Contract addresses can change when you restart the local blockchain, so update your app configuration when needed.
- If `localhost:3000` is already in use, the app may ask to use another port. You can also start it manually with:

```bash
PORT=3001 npm start
```

## Summary

This project demonstrates a simple decentralized medical records management system using Solidity smart contracts and a React frontend. It is a practical example of how healthcare data can be managed with blockchain-based access control and transparent record tracking.
