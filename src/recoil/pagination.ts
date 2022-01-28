import { atom } from 'recoil';

export const paginationAtom = atom<number>({
  key: 'paginationAtom',
  default: 20,
});
