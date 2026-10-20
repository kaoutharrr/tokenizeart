
# Deployment

## Prerequisites

- MetaMask wallet
- Sepolia ETH for gas
- Remix IDE
- Solidity compiler compatible with ^0.8.20

## Instructions

1. Open https://remix.ethereum.org/
2. Load code/TokenizeArt.sol.
3. Compile the contract.
4. Connect MetaMask to Ethereum Sepolia.
5. Select Injected Provider - MetaMask.
6. Select the TokenizeArt contract.
7. Click Deploy.
8. Confirm the transaction.
9. Wait for confirmation.
10. Record the contract address and transaction hash.

## Deployment Information

Network: Ethereum Sepolia
Chain ID: 11155111

Explorer: https://sepolia.etherscan.io/

## Verification

After deployment, call:

- name()
- symbol()
- owner()

Confirm the results match the expected values.
