
# TokenizeArt Technical Documentation

## 1. Introduction

TokenizeArt creates NFTs using the ERC-721
standard on Ethereum Sepolia.

The NFT represents a pixel-art image containing
the number 42.

## 2. NFT Standard

ERC-721 defines a standard interface for
non-fungible tokens.

Each token has a unique ID within its contract.

## 3. Smart Contract

The contract inherits from:

- ERC721URIStorage
- Ownable

ERC721URIStorage manages per-token metadata URIs.

Ownable provides administrative access control.

## 4. Minting

mintNFT(address recipient, string metadataURI)

Only the contract owner can call this function.

It assigns the next token ID, safely mints
the token, and stores its metadata URI.

## 5. Metadata

Metadata is stored on IPFS.

It contains:

- NFT name
- Description
- Image URI
- Artist login
- Optional attributes

## 6. Ownership

ownerOf(tokenId) returns the NFT owner.

owner() returns the contract administrator.

These two addresses can be different.

## 7. Transfers

NFT owners or authorized operators can
transfer tokens using ERC-721 functions.

safeTransferFrom checks whether receiving
smart contracts support ERC-721 reception.

## 8. Security

- onlyOwner restricts minting.
- ERC-721 handles transfer authorization.
- Private keys are not stored in Git.
- The project uses a public test network.

## 9. Deployment

See deployment/deployment.md.

## 10. Minting

See mint/mint.md.
