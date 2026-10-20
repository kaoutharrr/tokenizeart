
 // SPDX-License-Identifier: MIT
 pragma solidity ^0.8.20;

 import {ERC721} from
     "@openzeppelin/contracts@5.4.0/token/ERC721/ERC721.sol";

 import {ERC721URIStorage} from
     "@openzeppelin/contracts@5.4.0/token/ERC721/extensions/ERC721URIStorage.sol";

 import {Ownable} from
     "@openzeppelin/contracts@5.4.0/access/Ownable.sol";

 contract TokenizeArt is ERC721URIStorage, Ownable {

     // The ID assigned to the next NFT.
     uint256 private _nextTokenId = 1;

     // Set collection name, symbol, and administrator.
     constructor()
         ERC721("42 Pixel Dreams", "PXL42")
         Ownable(msg.sender)
     {}

     // Only the contract owner can mint.
     function mintNFT(
         address recipient,
         string memory metadataURI
     ) public onlyOwner returns (uint256) {

         uint256 tokenId = _nextTokenId;

         // Prepare the ID for the next mint.
         _nextTokenId++;

         // Create the NFT and assign its owner.
         _safeMint(recipient, tokenId);

         // Associate the NFT with its IPFS metadata.
         _setTokenURI(tokenId, metadataURI);

         return tokenId;
     }
 }
