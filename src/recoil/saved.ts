import { atom } from 'recoil';

import { PokemonProps } from '@/type/Type';

export const savedAtom = atom<PokemonProps[]>({
  key: 'saved',
  default: [],
});
