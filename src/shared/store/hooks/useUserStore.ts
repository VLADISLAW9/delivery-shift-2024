import type { User } from '@appTypes/user.ts';
import { createSelectors } from '@store/utils/createSelectors.ts';
import { create } from 'zustand';

export interface UserState {
  user?: User;
  isLoggedIn: boolean;
}

export interface UserActions {
  initUser: (user: User) => void;
  setUserData: (user: User) => void;
  clearUser: () => void;
}

const initialState: UserState = {
  user: { id: 1 },
  isLoggedIn: false
};

export const useUserStoreBase = create((set) => ({
  ...initialState,

  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { id: user.id, ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  }
}));

export const useUserStore = createSelectors<UserState, UserActions>(useUserStoreBase);
