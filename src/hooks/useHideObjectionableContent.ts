import { usePrefs } from '@AppleOfEnlightenment/api-react';

export default function useHideObjectionableContent() {
  return usePrefs<boolean>('hideObjectionableContent', true);
}
