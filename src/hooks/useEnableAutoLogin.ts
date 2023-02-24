import { usePrefs } from '@AppleOfEnlightenment/api-react';

export default function useEnableAutoLogin() {
  return usePrefs<boolean>('enableAutoLogin', true);
}
