# Go Data Feed Smart Contract Project

## Overview
The Go Data Feed Smart Contract Project is designed to aggregate blockchain RPC data from a blockchain indexing service. The goal is to extend the functionalities of Chainlink's data feeds and combine this new Go-based service with an existing Rust-based blockchain ingestion project.

## Features
- **Blockchain RPC Data Aggregation**: Collect data from various blockchain RPC endpoints.
- **Smart Contract Integration**: Integrate data feeds with smart contracts for use in decentralized applications.
- **Golang Implementation**: The data aggregation service will be built using Golang, ensuring scalability and efficiency.
- **Extend Chainlink Feeds**: Build on the Chainlink data feed architecture to offer more robust, customizable, and decentralized data services.
- **Integration with Rust Blockchain Ingestion**: Leverage the existing Rust-based blockchain ingestion project to enhance data processing.

## Project Structure
- **/cmd**: Main entry point for the data aggregator service.
- **/pkg**: Core package for data collection, aggregation, and processing.
- **/contracts**: Smart contract definitions and integration logic.
- **/scripts**: Utility scripts for deployment and testing.
  
## Setup

### Prerequisites
Before you begin, make sure you have the following installed:
- Go 1.18+
- Rust (for the blockchain ingestion project)
- Node.js and NPM (if working with smart contract deployments)
  
### Install Dependencies
```bash
go mod tidy
```

### Running the Service
To start the data feed service, run:
```bash
go run cmd/main.go
```

### Smart Contract Deployment
For smart contract integration, use the following script:
```bash
npm run deploy
```


## Acknowledgements
This project builds on the architecture of Chainlink's data feeds and integrates blockchain data ingestion tools from the Rust ecosystem.
