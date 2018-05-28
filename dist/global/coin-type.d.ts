/// <reference types="long" />
import { CoinName } from "./coin-name";
import Long = require('long');
import * as BigNumber from "bignumber.js";
export interface CoinTypeConfiguration {
    name: string;
    currencySymbol: string;
    coinTypeCode: string;
    addressFormat: string;
    dust: number | string;
    decimals: number;
    amountParameters: Partial<BigNumber.Configuration>;
}
export declare class CoinType {
    configuration: CoinTypeConfiguration;
    private static instances;
    private static newDustCalculation(dustRelayFee);
    private static oldDustCalculation(minRelayTxFee);
    static Bitcoin: CoinType;
    static Litecoin: CoinType;
    static Dogecoin: CoinType;
    static Ethereum: CoinType;
    static Dash: CoinType;
    static BitcoinCash: CoinType;
    static Bitcore: CoinType;
    static get(type: CoinName): CoinType;
    static getByName(name: string): CoinType;
    static getBySymbol(symbol: string): CoinType;
    static getList(): Array<CoinTypeConfiguration>;
    readonly name: string;
    readonly symbol: string;
    readonly decimals: number;
    readonly coinTypeCode: string;
    private _dust;
    readonly dust: BigNumber.BigNumber;
    private _amountConstructor;
    private readonly amountConstructor;
    parseAmount(amount: number | BigNumber.BigNumber | string): any;
    amountToFloat(amount: Long | string): BigNumber.BigNumber;
    floatToAmount(amount: number | BigNumber.BigNumber | string): BigNumber.BigNumber;
    equals(other: any): boolean;
    constructor(configuration: CoinTypeConfiguration);
}
