import type { StateCreator } from 'zustand';

interface SenderPointState {
  id?: string;
  name?: string;
  latitude?: number;
  longitude?: number;
}

interface SenderPointActions {
  setSenderPoint: (senderPoint: SenderPointState) => void;
}

export type SenderPointSlice = SenderPointState | SenderPointActions;

const initialSenderPointState: SenderPointState = {
  id: undefined,
  latitude: undefined,
  name: undefined,
  longitude: undefined
};

export const senderPointSlice: StateCreator<SenderPointSlice> = (set) => ({
  ...initialSenderPointState,
  setSenderPoint: (senderPoint) => set({ ...senderPoint })
});
