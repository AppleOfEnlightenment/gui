import { usePrefs } from '@AppleOfEnlightenment/api-react';

export default function useEnableDataLayerService() {
  return usePrefs<boolean>('enableDataLayerService', false);
}
