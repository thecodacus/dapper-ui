/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DapperHub, DapperHubInterface } from "../DapperHub";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum DataTypes.PublicationType",
        name: "publicationType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postText",
        type: "string",
      },
    ],
    name: "Published",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postText",
        type: "string",
      },
    ],
    name: "PublishedComment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationId",
        type: "uint256",
      },
    ],
    name: "PublishedLike",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postText",
        type: "string",
      },
    ],
    name: "PublishedMirror",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postText",
        type: "string",
      },
    ],
    name: "PublishedPost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
    ],
    name: "PublishedStory",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MODERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
    ],
    name: "publishComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
    ],
    name: "publishLike",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "publishMirror",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "postText",
        type: "string",
      },
      {
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
    ],
    name: "publishPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "authorId",
        type: "uint256",
      },
      {
        internalType: "enum DataTypes.AttachmentType",
        name: "attachmentType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "postAttachmentUri",
        type: "string",
      },
    ],
    name: "publishStory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "profileImageUri",
        type: "string",
      },
      {
        internalType: "string",
        name: "profileHandle",
        type: "string",
      },
      {
        internalType: "string",
        name: "followNFTUri",
        type: "string",
      },
    ],
    name: "registerProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "profileContract",
        type: "address",
      },
    ],
    name: "setProfileContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "publicationContract",
        type: "address",
      },
    ],
    name: "setPublicationContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50620000276000801b336200005f60201b60201c565b620000597f71f3d55856e4058ed06ee057d79ada615f65cdf5f9ee88181b914225088f834f336200005f60201b60201c565b620001c2565b6200007182826200015060201b60201c565b6200014c57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620000f1620001ba60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b61249880620001d26000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063797669c911610097578063a217fddf11610066578063a217fddf14610293578063d547741f146102b1578063fa5f329a146102cd578063fcf85648146102e957610100565b8063797669c91461020d5780638d9478601461022b5780638db8214e1461024757806391d148541461026357610100565b806337b32eca116100d357806337b32eca1461019d5780633945fbb0146101b9578063517c7c07146101d557806372dfb875146101f157610100565b806301ffc9a714610105578063248a9ca3146101355780632f2ff15d1461016557806336568abe14610181575b600080fd5b61011f600480360381019061011a91906112bd565b610305565b60405161012c9190611305565b60405180910390f35b61014f600480360381019061014a9190611356565b61037f565b60405161015c9190611392565b60405180910390f35b61017f600480360381019061017a919061140b565b61039e565b005b61019b6004803603810190610196919061140b565b6103c7565b005b6101b760048036038101906101b291906115ec565b61044a565b005b6101d360048036038101906101ce919061169f565b6104e9565b005b6101ef60048036038101906101ea9190611746565b610625565b005b61020b600480360381019061020691906117e5565b61067f565b005b610215610734565b6040516102229190611392565b60405180910390f35b61024560048036038101906102409190611825565b610758565b005b610261600480360381019061025c9190611894565b6107be565b005b61027d6004803603810190610278919061140b565b610835565b60405161028a9190611305565b60405180910390f35b61029b61089f565b6040516102a89190611392565b60405180910390f35b6102cb60048036038101906102c6919061140b565b6108a6565b005b6102e760048036038101906102e29190611894565b6108cf565b005b61030360048036038101906102fe91906118c1565b610946565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103785750610377826109ef565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b6103a78261037f565b6103b8816103b3610a59565b610a61565b6103c28383610afe565b505050565b6103cf610a59565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461043c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610433906119b3565b60405180910390fd5b6104468282610bde565b5050565b6000851161048d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048490611a45565b60405180910390fd5b600061049e8560018585888b610cbf565b90507faa9647d9877fae2044818fff68668019e70927842c53a9afac75e5ea812d5b508686838686896040516104d996959493929190611b62565b60405180910390a1505050505050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561057b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057290611c1d565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166303a80dfb338585856040518563ffffffff1660e01b81526004016105dc9493929190611c4c565b6020604051808303816000875af11580156105fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f9190611cbb565b50505050565b60006106378560008585886000610cbf565b90507f819c8c1971dd9db60ecb2a0a7c5b083e9bbbb9be75a9c490a83eaeb9f3a8a4788582858588604051610670959493929190611ce8565b60405180910390a15050505050565b600082116106c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b990611a45565b60405180910390fd5b60006106f28260036000604051806020016040528060008152506040518060200160405280600081525088610cbf565b90507f622596b30a29501b78898635c144ab709f06185f6d716a64f00ed0fe7eb220c583838360405161072793929190611d49565b60405180910390a1505050565b7f71f3d55856e4058ed06ee057d79ada615f65cdf5f9ee88181b914225088f834f81565b60006107798460028585604051806020016040528060008152506000610cbf565b90507fcd3a9627d01e901fe2736be158e346dfb1bf4c3abd16220aa927673fb0b0fb26848285856040516107b09493929190611d80565b60405180910390a150505050565b7f71f3d55856e4058ed06ee057d79ada615f65cdf5f9ee88181b914225088f834f6107f0816107eb610a59565b610a61565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b6108af8261037f565b6108c0816108bb610a59565b610a61565b6108ca8383610bde565b505050565b7f71f3d55856e4058ed06ee057d79ada615f65cdf5f9ee88181b914225088f834f610901816108fc610a59565b610a61565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008311610989576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098090611a45565b60405180910390fd5b60006109aa8360046000604051806020016040528060008152508689610cbf565b90507fc360c1992cb7e1fa71989d7724b91a79352b1e44560b895f1c2d2605d3bfa6bb848483856040516109e19493929190611dcc565b60405180910390a150505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b610a6b8282610835565b610afa57610a908173ffffffffffffffffffffffffffffffffffffffff166014611015565b610a9e8360001c6020611015565b604051602001610aaf929190611eec565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af19190611f26565b60405180910390fd5b5050565b610b088282610835565b610bda57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b7f610a59565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610be88282610835565b15610cbb57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610c60610a59565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4990611f94565b60405180910390fd5b6000835111610d96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8d90612000565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e896040518263ffffffff1660e01b8152600401610df39190612020565b602060405180830381865afa158015610e10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e349190612050565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b906120ef565b60405180910390fd5b60006004811115610eb857610eb7611a74565b5b866004811115610ecb57610eca611a74565b5b14610f15576000855111610f14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0b9061215b565b60405180910390fd5b5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c7525005338b8b898c8c428c6040518963ffffffff1660e01b8152600401610f809897969594939291906121c3565b6020604051808303816000875af1158015610f9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc39190611cbb565b90507f9196666b741d7d0d7c36ed6bd9ee887d65e899572f2b9fc3469d16b523004d4089828a8a8a8a604051610ffe9695949392919061224f565b60405180910390a180925050509695505050505050565b60606000600283600261102891906122ed565b6110329190612347565b67ffffffffffffffff81111561104b5761104a61149c565b5b6040519080825280601f01601f19166020018201604052801561107d5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106110b5576110b461239d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106111195761111861239d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261115991906122ed565b6111639190612347565b90505b6001811115611203577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106111a5576111a461239d565b5b1a60f81b8282815181106111bc576111bb61239d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806111fc906123cc565b9050611166565b5060008414611247576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123e90612442565b60405180910390fd5b8091505092915050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61129a81611265565b81146112a557600080fd5b50565b6000813590506112b781611291565b92915050565b6000602082840312156112d3576112d261125b565b5b60006112e1848285016112a8565b91505092915050565b60008115159050919050565b6112ff816112ea565b82525050565b600060208201905061131a60008301846112f6565b92915050565b6000819050919050565b61133381611320565b811461133e57600080fd5b50565b6000813590506113508161132a565b92915050565b60006020828403121561136c5761136b61125b565b5b600061137a84828501611341565b91505092915050565b61138c81611320565b82525050565b60006020820190506113a76000830184611383565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113d8826113ad565b9050919050565b6113e8816113cd565b81146113f357600080fd5b50565b600081359050611405816113df565b92915050565b600080604083850312156114225761142161125b565b5b600061143085828601611341565b9250506020611441858286016113f6565b9150509250929050565b6000819050919050565b61145e8161144b565b811461146957600080fd5b50565b60008135905061147b81611455565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6114d48261148b565b810181811067ffffffffffffffff821117156114f3576114f261149c565b5b80604052505050565b6000611506611251565b905061151282826114cb565b919050565b600067ffffffffffffffff8211156115325761153161149c565b5b61153b8261148b565b9050602081019050919050565b82818337600083830152505050565b600061156a61156584611517565b6114fc565b90508281526020810184848401111561158657611585611486565b5b611591848285611548565b509392505050565b600082601f8301126115ae576115ad611481565b5b81356115be848260208601611557565b91505092915050565b600581106115d457600080fd5b50565b6000813590506115e6816115c7565b92915050565b600080600080600060a086880312156116085761160761125b565b5b60006116168882890161146c565b95505060206116278882890161146c565b945050604086013567ffffffffffffffff81111561164857611647611260565b5b61165488828901611599565b9350506060611665888289016115d7565b925050608086013567ffffffffffffffff81111561168657611685611260565b5b61169288828901611599565b9150509295509295909350565b6000806000606084860312156116b8576116b761125b565b5b600084013567ffffffffffffffff8111156116d6576116d5611260565b5b6116e286828701611599565b935050602084013567ffffffffffffffff81111561170357611702611260565b5b61170f86828701611599565b925050604084013567ffffffffffffffff8111156117305761172f611260565b5b61173c86828701611599565b9150509250925092565b600080600080608085870312156117605761175f61125b565b5b600061176e8782880161146c565b945050602085013567ffffffffffffffff81111561178f5761178e611260565b5b61179b87828801611599565b93505060406117ac878288016115d7565b925050606085013567ffffffffffffffff8111156117cd576117cc611260565b5b6117d987828801611599565b91505092959194509250565b600080604083850312156117fc576117fb61125b565b5b600061180a8582860161146c565b925050602061181b8582860161146c565b9150509250929050565b60008060006060848603121561183e5761183d61125b565b5b600061184c8682870161146c565b935050602061185d868287016115d7565b925050604084013567ffffffffffffffff81111561187e5761187d611260565b5b61188a86828701611599565b9150509250925092565b6000602082840312156118aa576118a961125b565b5b60006118b8848285016113f6565b91505092915050565b6000806000606084860312156118da576118d961125b565b5b60006118e88682870161146c565b93505060206118f98682870161146c565b925050604084013567ffffffffffffffff81111561191a57611919611260565b5b61192686828701611599565b9150509250925092565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600061199d602f83611930565b91506119a882611941565b604082019050919050565b600060208201905081810360008301526119cc81611990565b9050919050565b7f636f6d6d656e74206d7573742068617665206120706172656e74207075626c6960008201527f636174696f6e0000000000000000000000000000000000000000000000000000602082015250565b6000611a2f602683611930565b9150611a3a826119d3565b604082019050919050565b60006020820190508181036000830152611a5e81611a22565b9050919050565b611a6e8161144b565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60058110611ab457611ab3611a74565b5b50565b6000819050611ac582611aa3565b919050565b6000611ad582611ab7565b9050919050565b611ae581611aca565b82525050565b600081519050919050565b60005b83811015611b14578082015181840152602081019050611af9565b83811115611b23576000848401525b50505050565b6000611b3482611aeb565b611b3e8185611930565b9350611b4e818560208601611af6565b611b578161148b565b840191505092915050565b600060c082019050611b776000830189611a65565b611b846020830188611a65565b611b916040830187611a65565b611b9e6060830186611adc565b8181036080830152611bb08185611b29565b905081810360a0830152611bc48184611b29565b9050979650505050505050565b7f50726f66696c6520636f6e7472616374206e6f74207365740000000000000000600082015250565b6000611c07601883611930565b9150611c1282611bd1565b602082019050919050565b60006020820190508181036000830152611c3681611bfa565b9050919050565b611c46816113cd565b82525050565b6000608082019050611c616000830187611c3d565b8181036020830152611c738186611b29565b90508181036040830152611c878185611b29565b90508181036060830152611c9b8184611b29565b905095945050505050565b600081519050611cb581611455565b92915050565b600060208284031215611cd157611cd061125b565b5b6000611cdf84828501611ca6565b91505092915050565b600060a082019050611cfd6000830188611a65565b611d0a6020830187611a65565b611d176040830186611adc565b8181036060830152611d298185611b29565b90508181036080830152611d3d8184611b29565b90509695505050505050565b6000606082019050611d5e6000830186611a65565b611d6b6020830185611a65565b611d786040830184611a65565b949350505050565b6000608082019050611d956000830187611a65565b611da26020830186611a65565b611daf6040830185611adc565b8181036060830152611dc18184611b29565b905095945050505050565b6000608082019050611de16000830187611a65565b611dee6020830186611a65565b611dfb6040830185611a65565b8181036060830152611e0d8184611b29565b905095945050505050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000611e59601783611e18565b9150611e6482611e23565b601782019050919050565b6000611e7a82611aeb565b611e848185611e18565b9350611e94818560208601611af6565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000611ed6601183611e18565b9150611ee182611ea0565b601182019050919050565b6000611ef782611e4c565b9150611f038285611e6f565b9150611f0e82611ec9565b9150611f1a8284611e6f565b91508190509392505050565b60006020820190508181036000830152611f408184611b29565b905092915050565b7f5075626c69636174696f6e20636f6e7472616374206e6f742073657400000000600082015250565b6000611f7e601c83611930565b9150611f8982611f48565b602082019050919050565b60006020820190508181036000830152611fad81611f71565b9050919050565b7f506f737420746578742063616e6e6f7420626520656d70747900000000000000600082015250565b6000611fea601983611930565b9150611ff582611fb4565b602082019050919050565b6000602082019050818103600083015261201981611fdd565b9050919050565b60006020820190506120356000830184611a65565b92915050565b60008151905061204a816113df565b92915050565b6000602082840312156120665761206561125b565b5b60006120748482850161203b565b91505092915050565b7f4f6e6c79206f776e6572206f662070726f66696c652063616e207075626c697360008201527f68206f6e20626568616c66206f662070726f66696c6500000000000000000000602082015250565b60006120d9603683611930565b91506120e48261207d565b604082019050919050565b60006020820190508181036000830152612108816120cc565b9050919050565b7f506f7374206174746163686d656e742063616e6e6f7420626520656d70747900600082015250565b6000612145601f83611930565b91506121508261210f565b602082019050919050565b6000602082019050818103600083015261217481612138565b9050919050565b6005811061218c5761218b611a74565b5b50565b600081905061219d8261217b565b919050565b60006121ad8261218f565b9050919050565b6121bd816121a2565b82525050565b6000610100820190506121d9600083018b611c3d565b6121e6602083018a611a65565b6121f360408301896121b4565b81810360608301526122058188611b29565b90506122146080830187611adc565b81810360a08301526122268186611b29565b905061223560c0830185611a65565b61224260e0830184611a65565b9998505050505050505050565b600060c0820190506122646000830189611a65565b6122716020830188611a65565b61227e60408301876121b4565b61228b6060830186611adc565b818103608083015261229d8185611b29565b905081810360a08301526122b18184611b29565b9050979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006122f88261144b565b91506123038361144b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561233c5761233b6122be565b5b828202905092915050565b60006123528261144b565b915061235d8361144b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612392576123916122be565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006123d78261144b565b915060008214156123eb576123ea6122be565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061242c602083611930565b9150612437826123f6565b602082019050919050565b6000602082019050818103600083015261245b8161241f565b905091905056fea2646970667358221220706bcffabb243d87f1e2ca062c86d3e63b1bd3647c3002dbadf29f279afdc79d64736f6c634300080c0033";

export class DapperHub__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DapperHub> {
    return super.deploy(overrides || {}) as Promise<DapperHub>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DapperHub {
    return super.attach(address) as DapperHub;
  }
  connect(signer: Signer): DapperHub__factory {
    return super.connect(signer) as DapperHub__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DapperHubInterface {
    return new utils.Interface(_abi) as DapperHubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DapperHub {
    return new Contract(address, _abi, signerOrProvider) as DapperHub;
  }
}