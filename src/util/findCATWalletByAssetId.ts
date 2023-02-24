import type { Wallet } from '@AppleOfEnlightenment/api';
import { WalletType } from '@AppleOfEnlightenment/api';

export default function findCATWalletByAssetId(wallets: Wallet[], assetId: string) {
  return wallets.find(
    (wallet) => wallet.type === WalletType.CAT && wallet.meta?.assetId?.toLowerCase() === assetId.toLowerCase()
  );
}
