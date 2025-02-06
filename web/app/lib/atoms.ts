import { Fade } from '@mui/material';
import { atom } from 'jotai';
import { TPartialStore } from './types';

export const selectedStoreAtom = atom<TPartialStore>({});

export const snackAtom = atom({
    open: false,
    Transition: Fade
});
