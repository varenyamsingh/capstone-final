# Medical Records Management Project

This workspace contains a blockchain-based medical records application built with React and Solidity. The project allows medical data to be stored on a smart contract, with role-based access for admins and doctors, while the frontend connects to MetaMask and displays patient records in a simple web interface.

## What this project does

The app is designed to manage patient medical information in a secure, transparent way using Ethereum smart contracts.

- A doctor can add and delete patient records.
- An admin can assign wallet addresses to roles such as doctor, patient, or admin.
- Patient information is stored as blockchain data instead of a normal database.
- The React app communicates with the deployed smart contract using ethers.js.
- Users interact through MetaMask and a local Hardhat blockchain for development.

## How it works

1. The Solidity contract in `MedicalRecordStorage/contracts/MedicalRecords.sol` stores the actual patient record data.
2. Roles are assigned using the `setRole` function, which restricts actions to authorized wallet addresses.
3. The frontend in `MedicalRecordStorage/src` connects to the wallet and contract through ethers.js.
4. The app reads event logs from the contract to show records and updates after actions happen.
5. The local Hardhat network is used during development, and the app can also be connected to test networks such as Goerli or Mumbai.

## Project structure

- `MedicalRecordStorage/contracts/MedicalRecords.sol` — smart contract logic
- `MedicalRecordStorage/scripts/` — deployment and seeding scripts
- `MedicalRecordStorage/src/` — React frontend
- `MedicalRecordStorage/hardhat.config.js` — Hardhat network configuration
- `MedicalRecordStorage/package.json` — frontend + Hardhat project scripts

## Prerequisites

Before running the project, make sure you have:

- Node.js v18 or later
- npm
- MetaMask installed in your browser
- A local terminal in the workspace

## Step-by-step: run the project locally

### 1) Open the app folder

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start a local blockchain network

Open a new terminal and run:

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
npx hardhat node
```

This starts a local Ethereum network (usually at `http://127.0.0.1:8545`).

### 4) Deploy the smart contract

Open another terminal and run:

```bash
cd "c:/Users/Varenyam singh/Desktop/April/MedicalRecordStorage"
npx hardhat run scripts/deploy_medical_records.js --network localhost
```

This will deploy the contract and print the deployed address. If the app is already configured for the local network, it will use that contract. If not, update the address in `MedicalRecordStorage/src/config.json`.

### 5) Start the React app

In the project folder, run:

```bash
npm start
```

If port 3000 is already in use, the app may ask whether to use another port. If the project is already running, you can open the existing local site instead.

### 6) Open the app in the browser

Visit:

```text
http://localhost:3000
```

### 7) Connect MetaMask

- Open MetaMask
- Connect to the local Hardhat network or the network where the contract is deployed
- Import or use a Hardhat-generated account
- The app should then be ready to interact with the contract

## Optional: deploy to a public test network

The project is configured for Goerli and Mumbai in `hardhat.config.js`. To use them, create a `.env` file with values similar to:

```env
PRIVATE_KEYS=your_private_key
GOERLI_API_KEY=your_infura_or_alchemy_key
MUMBAI_API_KEY=your_polygon_key
```

Then deploy with:

```bash
npx hardhat run scripts/deploy_medical_records.js --network goerli
```

or

```bash
npx hardhat run scripts/deploy_medical_records.js --network mumbai
```

## Notes

- The app depends on wallet connectivity and local blockchain state.
- If you restart Hardhat, the deployed contract address may change, so you may need to update the frontend config.
- For a clean local setup, stop the previous hardhat node and deploy again if blockchain state is stale.

## Common issue

If you see a message saying port 3000 is already in use, it usually means another local server is already running. In that case:

- keep the existing app running, or
- start the frontend on another port with:

```bash
PORT=3001 npm start
```

## Summary

This project is a full-stack demo of a medical records system built on blockchain principles: secure role-based access, transparent record storage, and a user-friendly React interface for interacting with the smart contract.
