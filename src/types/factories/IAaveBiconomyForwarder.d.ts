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

interface IAaveBiconomyForwarderInterface extends ethers.utils.Interface {
  functions: {
    "depositToAave(address,uint256,uint16)": FunctionFragment;
    "setLendingPoolAddress(address)": FunctionFragment;
    "setTrustedForwarder(address)": FunctionFragment;
    "withdrawFromAave(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositToAave",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromAave",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositToAave",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromAave",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAaveBiconomyForwarder extends BaseContract {
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

  interface: IAaveBiconomyForwarderInterface;

  functions: {
    depositToAave(
      asset: string,
      amount: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLendingPoolAddress(
      lPAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTrustedForwarder(
      forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFromAave(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  depositToAave(
    asset: string,
    amount: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLendingPoolAddress(
    lPAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTrustedForwarder(
    forwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFromAave(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositToAave(
      asset: string,
      amount: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLendingPoolAddress(
      lPAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFromAave(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositToAave(
      asset: string,
      amount: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLendingPoolAddress(
      lPAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTrustedForwarder(
      forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFromAave(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositToAave(
      asset: string,
      amount: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLendingPoolAddress(
      lPAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedForwarder(
      forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFromAave(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
