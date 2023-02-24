import type { PoolInfo } from '@AppleOfEnlightenment/api';
import { toCamelCase } from '@AppleOfEnlightenment/api';

export default async function getPoolInfo(poolUrl: string): PoolInfo {
  const url = `${poolUrl}/pool_info`;
  const response = await fetch(url);
  const data = await response.json();

  return toCamelCase(data);
}
