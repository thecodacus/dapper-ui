/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface DapperHubInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MODERATOR_ROLE()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "publishComment(uint256,uint256,string,uint8,string)": FunctionFragment;
    "publishLike(uint256,uint256)": FunctionFragment;
    "publishMirror(uint256,uint256,string)": FunctionFragment;
    "publishPost(uint256,string,uint8,string)": FunctionFragment;
    "publishStory(uint256,uint8,string)": FunctionFragment;
    "registerProfile(string,string,string)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setProfileContract(address)": FunctionFragment;
    "setPublicationContract(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MODERATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "publishComment",
    values: [BigNumberish, BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "publishLike",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "publishMirror",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "publishPost",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "publishStory",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerProfile",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProfileContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPublicationContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MODERATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishComment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishLike",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishMirror",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishPost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishStory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProfileContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPublicationContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "Published(uint256,uint256,uint8,uint8,string,string)": EventFragment;
    "PublishedComment(uint256,uint256,uint256,uint8,string,string)": EventFragment;
    "PublishedLike(uint256,uint256,uint256)": EventFragment;
    "PublishedMirror(uint256,uint256,uint256,string)": EventFragment;
    "PublishedPost(uint256,uint256,uint8,string,string)": EventFragment;
    "PublishedStory(uint256,uint256,uint8,string)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Published"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublishedComment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublishedLike"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublishedMirror"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublishedPost"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublishedStory"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type PublishedEvent = TypedEvent<
  [BigNumber, BigNumber, number, number, string, string] & {
    authorId: BigNumber;
    publicationId: BigNumber;
    publicationType: number;
    attachmentType: number;
    postAttachmentUri: string;
    postText: string;
  }
>;

export type PublishedCommentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, number, string, string] & {
    parentId: BigNumber;
    authorId: BigNumber;
    publicationId: BigNumber;
    attachmentType: number;
    postAttachmentUri: string;
    postText: string;
  }
>;

export type PublishedLikeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    parentId: BigNumber;
    authorId: BigNumber;
    publicationId: BigNumber;
  }
>;

export type PublishedMirrorEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string] & {
    parentId: BigNumber;
    authorId: BigNumber;
    publicationId: BigNumber;
    postText: string;
  }
>;

export type PublishedPostEvent = TypedEvent<
  [BigNumber, BigNumber, number, string, string] & {
    authorId: BigNumber;
    publicationId: BigNumber;
    attachmentType: number;
    postAttachmentUri: string;
    postText: string;
  }
>;

export type PublishedStoryEvent = TypedEvent<
  [BigNumber, BigNumber, number, string] & {
    authorId: BigNumber;
    publicationId: BigNumber;
    attachmentType: number;
    postAttachmentUri: string;
  }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export class DapperHub extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DapperHubInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MODERATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    publishComment(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publishLike(
      parentId: BigNumberish,
      authorId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publishMirror(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publishPost(
      authorId: BigNumberish,
      postText: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publishStory(
      authorId: BigNumberish,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerProfile(
      profileImageUri: string,
      profileHandle: string,
      followNFTUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProfileContract(
      profileContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPublicationContract(
      publicationContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MODERATOR_ROLE(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  publishComment(
    parentId: BigNumberish,
    authorId: BigNumberish,
    text: string,
    attachmentType: BigNumberish,
    postAttachmentUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publishLike(
    parentId: BigNumberish,
    authorId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publishMirror(
    parentId: BigNumberish,
    authorId: BigNumberish,
    text: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publishPost(
    authorId: BigNumberish,
    postText: string,
    attachmentType: BigNumberish,
    postAttachmentUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publishStory(
    authorId: BigNumberish,
    attachmentType: BigNumberish,
    postAttachmentUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerProfile(
    profileImageUri: string,
    profileHandle: string,
    followNFTUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProfileContract(
    profileContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPublicationContract(
    publicationContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MODERATOR_ROLE(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    publishComment(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    publishLike(
      parentId: BigNumberish,
      authorId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    publishMirror(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      overrides?: CallOverrides
    ): Promise<void>;

    publishPost(
      authorId: BigNumberish,
      postText: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    publishStory(
      authorId: BigNumberish,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerProfile(
      profileImageUri: string,
      profileHandle: string,
      followNFTUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProfileContract(
      profileContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPublicationContract(
      publicationContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Published(uint256,uint256,uint8,uint8,string,string)"(
      authorId?: null,
      publicationId?: null,
      publicationType?: null,
      attachmentType?: null,
      postAttachmentUri?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, number, string, string],
      {
        authorId: BigNumber;
        publicationId: BigNumber;
        publicationType: number;
        attachmentType: number;
        postAttachmentUri: string;
        postText: string;
      }
    >;

    Published(
      authorId?: null,
      publicationId?: null,
      publicationType?: null,
      attachmentType?: null,
      postAttachmentUri?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, number, string, string],
      {
        authorId: BigNumber;
        publicationId: BigNumber;
        publicationType: number;
        attachmentType: number;
        postAttachmentUri: string;
        postText: string;
      }
    >;

    "PublishedComment(uint256,uint256,uint256,uint8,string,string)"(
      parentId?: null,
      authorId?: null,
      publicationId?: null,
      attachmentType?: null,
      postAttachmentUri?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, number, string, string],
      {
        parentId: BigNumber;
        authorId: BigNumber;
        publicationId: BigNumber;
        attachmentType: number;
        postAttachmentUri: string;
        postText: string;
      }
    >;

    PublishedComment(
      parentId?: null,
      authorId?: null,
      publicationId?: null,
      attachmentType?: null,
      postAttachmentUri?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, number, string, string],
      {
        parentId: BigNumber;
        authorId: BigNumber;
        publicationId: BigNumber;
        attachmentType: number;
        postAttachmentUri: string;
        postText: string;
      }
    >;

    "PublishedLike(uint256,uint256,uint256)"(
      parentId?: null,
      authorId?: null,
      publicationId?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { parentId: BigNumber; authorId: BigNumber; publicationId: BigNumber }
    >;

    PublishedLike(
      parentId?: null,
      authorId?: null,
      publicationId?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { parentId: BigNumber; authorId: BigNumber; publicationId: BigNumber }
    >;

    "PublishedMirror(uint256,uint256,uint256,string)"(
      parentId?: null,
      authorId?: null,
      publicationId?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string],
      {
        parentId: BigNumber;
        authorId: BigNumber;
        publicationId: BigNumber;
        postText: string;
      }
    >;

    PublishedMirror(
      parentId?: null,
      authorId?: null,
      publicationId?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string],
      {
        parentId: BigNumber;
        authorId: BigNumber;
        publicationId: BigNumber;
        postText: string;
      }
    >;

    "PublishedPost(uint256,uint256,uint8,string,string)"(
      authorId?: null,
      publicationId?: null,
      attachmentType?: null,
      postAttachmentUri?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string, string],
      {
        authorId: BigNumber;
        publicationId: BigNumber;
        attachmentType: number;
        postAttachmentUri: string;
        postText: string;
      }
    >;

    PublishedPost(
      authorId?: null,
      publicationId?: null,
      attachmentType?: null,
      postAttachmentUri?: null,
      postText?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string, string],
      {
        authorId: BigNumber;
        publicationId: BigNumber;
        attachmentType: number;
        postAttachmentUri: string;
        postText: string;
      }
    >;

    "PublishedStory(uint256,uint256,uint8,string)"(
      authorId?: null,
      publicationId?: null,
      attachmentType?: null,
      postAttachmentUri?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        authorId: BigNumber;
        publicationId: BigNumber;
        attachmentType: number;
        postAttachmentUri: string;
      }
    >;

    PublishedStory(
      authorId?: null,
      publicationId?: null,
      attachmentType?: null,
      postAttachmentUri?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        authorId: BigNumber;
        publicationId: BigNumber;
        attachmentType: number;
        postAttachmentUri: string;
      }
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MODERATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    publishComment(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publishLike(
      parentId: BigNumberish,
      authorId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publishMirror(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publishPost(
      authorId: BigNumberish,
      postText: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publishStory(
      authorId: BigNumberish,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerProfile(
      profileImageUri: string,
      profileHandle: string,
      followNFTUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProfileContract(
      profileContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPublicationContract(
      publicationContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MODERATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publishComment(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publishLike(
      parentId: BigNumberish,
      authorId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publishMirror(
      parentId: BigNumberish,
      authorId: BigNumberish,
      text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publishPost(
      authorId: BigNumberish,
      postText: string,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publishStory(
      authorId: BigNumberish,
      attachmentType: BigNumberish,
      postAttachmentUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerProfile(
      profileImageUri: string,
      profileHandle: string,
      followNFTUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProfileContract(
      profileContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPublicationContract(
      publicationContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
