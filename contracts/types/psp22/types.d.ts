// Generated by dedot cli

export type InkStorageLazyMapping = {};

export type InkStorageTraitsImplsResolverKey = {};

export type InkStorageTraitsImplsAutoKey = {};

export type InkStorageTraitsImplsManualKey = {};

export type Psp22Token = {
  data: Psp22DataPsp22Data;
  name?: string | undefined;
  symbol?: string | undefined;
  decimals: number;
};

export type Psp22DataPsp22Data = {
  totalSupply: bigint;
  balances: InkStorageLazyMapping;
  allowances: InkStorageLazyMapping;
};

export type InkPrimitivesLangError = 'CouldNotReadInput';

export type Psp22ErrorsPsp22Error =
  | { type: 'Custom'; value: string }
  | { type: 'InsufficientBalance' }
  | { type: 'InsufficientAllowance' }
  | { type: 'ZeroRecipientAddress' }
  | { type: 'ZeroSenderAddress' }
  | { type: 'SafeTransferCheckFailed'; value: string };

export type InkEnvNoChainExtension = null;
