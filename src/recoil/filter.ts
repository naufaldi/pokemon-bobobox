import { atom } from 'recoil';

export const filterAtom = atom<string>({
  key: 'filter',
  default: '',
});
