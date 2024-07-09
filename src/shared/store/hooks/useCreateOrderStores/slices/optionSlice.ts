import type { Options } from '@appTypes/option.ts';
import type { StateCreator } from 'zustand';

export interface OptionsState {
  options?: Options[];
}

export interface OptionsActions {
  setOptions: (options: Options[]) => void;
}

export type OptionsSlice = OptionsState | OptionsActions;

const initialOptionsState: OptionsState = {
  options: undefined
};

export const optionsSlice: StateCreator<OptionsSlice> = (set) => ({
  ...initialOptionsState,
  setOptions: (options) =>
    set({
      options
    })
});
