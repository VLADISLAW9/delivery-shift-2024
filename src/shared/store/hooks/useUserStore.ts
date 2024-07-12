import type { User } from '@appTypes/user.ts';
import { create } from 'zustand';

interface UserState {
  user?: User;
  isLoggedIn: boolean;
}

interface UserActions {
  setUserData: (user: User) => void;
  clearUser: () => void;
}

const initialState: UserState = {
  user: undefined,
  isLoggedIn: false
};

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { _id: user._id, phone: user.phone, ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  }
}));
