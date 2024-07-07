import type { User } from '@appTypes/user.ts';
import { createStore } from 'zustand';

import { createSelectors } from '../utils/createSelectors.ts';

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
  user: undefined,
  isLoggedIn: false
};

const userStore = createStore<UserState & UserActions>((set) => ({
  ...initialState,

  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { id: user?.id, ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  }
}));

export const useUserStore = createSelectors(userStore);
