
const CONTRACT_ADDRESS = "0x6F56f6862DfCFC91903f70484E60C45723FD2d58";
const IMAGE_CID = "bafybeihntees3amdpjx4p5ivki54nplnfscsy3xttanks7hhmgmpoeslyi";

const SEPOLIA_CHAIN_ID = 11155111;

const ABI = [
  "function mintNFT(address recipient, string metadataURI) public returns (uint256)",
  "function owner() view returns (address)"
];

const connectButton = document.getElementById("connectButton");
const mintButton = document.getElementById("mintButton");
const walletLabel = document.getElementById("wallet");
const statusLabel = document.getElementById("status");
const metadataInput = document.getElementById("metadataURI");
const transactionLink = document.getElementById("transactionLink");

let provider;
let signer;
let contract;
let walletAddress;

document.getElementById("artwork").src =
  `https://gateway.pinata.cloud/ipfs/${IMAGE_CID}`;

function setStatus(message) {
  statusLabel.textContent = message;
}

async function connectWallet() {
  try {
    if (!window.ethereum) {
      throw new Error("Please install MetaMask.");
    }

    provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const network = await provider.getNetwork();

    if (Number(network.chainId) !== SEPOLIA_CHAIN_ID) {
      throw new Error("Please switch MetaMask to Ethereum Sepolia.");
    }

    signer = await provider.getSigner();
    walletAddress = await signer.getAddress();

    contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      signer
    );

    walletLabel.textContent =
      `Connected: ${walletAddress}`;

    connectButton.textContent = "Wallet Connected";
    mintButton.disabled = false;

    setStatus("Wallet connected. Ready to mint!");

  } catch (error) {
    setStatus(error.shortMessage || error.message);
  }
}

async function mintNFT() {
  try {
    console.log("Minting NFT...");
    mintButton.disabled = true;
    transactionLink.textContent = "";

    if (!contract || !walletAddress) {
        console.log("Wallet not connected or contract not initialized.");
      throw new Error("Connect your wallet first.");
    }

    console.log(`Wallet Address: ${walletAddress}`);

    const metadataURI = metadataInput.value.trim();

    if (!metadataURI.startsWith("ipfs://")) {
      throw new Error("Enter a valid ipfs:// metadata URI.");
    }

    console.log(`Metadata URI: ${metadataURI}`);

    const contractOwner = await contract.owner();

    console.log(`Contract Owner: ${contractOwner}`);

    if (contractOwner.toLowerCase() !== walletAddress.toLowerCase()) {
      throw new Error(
        "This wallet is not the contract owner. Minting is restricted."
      );
    }

    setStatus("Please confirm the transaction in MetaMask...");

    const transaction = await contract.mintNFT(
      walletAddress,
      metadataURI
    );

    setStatus("Transaction submitted. Waiting for confirmation...");

    transactionLink.href =
      `https://sepolia.etherscan.io/tx/${transaction.hash}`;

    transactionLink.textContent = "View transaction on Etherscan";

    const receipt = await transaction.wait();

    console.log("Transaction receipt:", receipt);

    if (receipt.status !== 1) {
      throw new Error("The mint transaction failed.");
    }

    setStatus("NFT minted successfully! 🎉");

  } catch (error) {
    setStatus(error.shortMessage || error.message);
    console.log("error");
  } finally {
    mintButton.disabled = false;
  }
}

connectButton.addEventListener("click", connectWallet);
mintButton.addEventListener("click", mintNFT);

if (window.ethereum) {
  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });

  window.ethereum.on("accountsChanged", () => {
    window.location.reload();
  });
}
