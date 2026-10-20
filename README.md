
# TokenizeArt - 42 Pixel Dreams

## Overview

TokenizeArt is an NFT project developed as part
of the 42 curriculum.

It creates a pixel-art NFT featuring the number
42 and deploys it on Ethereum Sepolia.

## Technologies

- Solidity
- Ethereum Sepolia Testnet
- ERC-721
- OpenZeppelin Contracts 
- Remix IDE
- MetaMask
- IPFS / Pinata

## Design Choices

### Ethereum Sepolia
Sepolia was selected because it supports
Ethereum smart contracts and allows testing
without spending real cryptocurrency.

### ERC-721
ERC-721 was selected because each NFT has
a unique token ID and individual ownership.

### OpenZeppelin
OpenZeppelin provides reusable ERC-721 and
access-control implementations.

### IPFS
The artwork and metadata are stored using
content-addressed storage instead of placing
the image directly on-chain.

### Access Control
Only the contract owner can mint new NFTs.

## NFT Details

Collection: 42 Pixel Dreams
Symbol: PXL42
Artist: kkouaz
Standard: ERC-721
Network: Ethereum Sepolia
Chain ID: 11155111



## Project Structure

- code/: Solidity smart contract
- deployment/: Deployment instructions and records
- mint/: NFT metadata and minting instructions
- documentation/: Technical documentation
- assets/: Original NFT artwork

## Security

- Minting is restricted with onlyOwner.
- ERC-721 authorization rules protect transfers.
- Private keys are never stored in the repository.
- Only test cryptocurrency is used.

## Usage

See deployment/deployment.md to deploy.
See mint/mint.md to mint the NFT.
See documentation/guide.md for explanations.
