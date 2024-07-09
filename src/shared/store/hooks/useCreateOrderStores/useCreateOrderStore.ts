import { createSelectors } from '@store/utils/createSelectors.ts';
import { create } from 'zustand';

import type { OptionsActions, OptionsSlice, OptionsState } from './slices/optionSlice.ts';
import { optionsSlice } from './slices/optionSlice.ts';

type CreateOrderState = OptionsState;
type CreateOrderActions = OptionsActions;

type CreateOrderSlice = OptionsSlice;

const useCreateOrderStoreBase = create<CreateOrderSlice>((...a) => ({
  ...optionsSlice(...a)
}));

export const useCreateOrderStore = createSelectors<CreateOrderState, CreateOrderActions>(
  useCreateOrderStoreBase
);
