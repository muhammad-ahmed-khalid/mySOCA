import {create} from 'zustand';
import {createLocationSlice} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createLocationSlice(set),
}));
