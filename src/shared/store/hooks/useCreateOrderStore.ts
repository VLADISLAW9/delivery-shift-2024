import type { Address } from '@appTypes/address.ts';
import type { Options } from '@appTypes/option.ts';
import type { Point } from '@appTypes/point.ts';
import type { User } from '@appTypes/user.ts';
import { create } from 'zustand';

type Payer = 'RECEIVER' | 'SENDER';
type Section = 'option' | 'receiver' | 'sender' | 'senderAddress' | 'receiverAddress' | 'payer';

interface CreateOrderState {
  section?: Section;
  options?: Options[];

  option?: Options;
  payer?: Payer;

  receiver?: Omit<User, 'id' | 'city' | 'email'>;
  sender?: Omit<User, 'id' | 'city' | 'email'>;

  senderPoint?: Point;
  senderAddress?: Address;

  receiverAddress?: Address;
  receiverPoint?: Point;
}

interface CreateOrderActions {
  setSection: (section: Section) => void;
  setOptions: (options: Options[]) => void;

  setOption: (option: Options) => void;
  setPayer: (payer: Payer) => void;

  setSender: (user: Omit<User, 'id' | 'city' | 'email'>) => void;
  setReceiver: (user: Omit<User, 'id' | 'city' | 'email'>) => void;

  setSenderPoint: (point: Point) => void;
  setSenderAddress: (address: Address) => void;

  setReceiverPoint: (point: Point) => void;
  setReceiverAddress: (address: Address) => void;
}

const initialState: CreateOrderState = {
  options: undefined,
  option: undefined,
  payer: undefined,
  receiverAddress: undefined,
  receiverPoint: undefined,
  section: undefined,
  senderAddress: undefined,
  receiver: undefined,
  sender: undefined
};

export const useCreateOrderStore = create<CreateOrderState & CreateOrderActions>((set) => ({
  ...initialState,

  setSection: (section) => set(() => ({ section })),
  setOptions: (options) => set(() => ({ options, section: 'option' })),

  setOption: (option) => set(() => ({ option, section: 'receiver' })),
  setPayer: (payer) => set(() => ({ payer })),

  setSender: (sender) => set(() => ({ sender, section: 'receiverAddress' })),
  setReceiver: (receiver) => set(() => ({ receiver, section: 'sender' })),

  setSenderPoint: (senderPoint) => set(() => ({ senderPoint })),
  setSenderAddress: (senderAddress) => set(() => ({ senderAddress, section: 'payer' })),

  setReceiverPoint: (receiverPoint) => set(() => ({ receiverPoint })),
  setReceiverAddress: (receiverAddress) =>
    set(() => ({ receiverAddress, section: 'senderAddress' })),

  clearOrderStore: () => {
    set(initialState);
  }
}));
