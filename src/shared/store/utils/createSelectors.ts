import type { StoreApi, UseBoundStore } from 'zustand';

type StateSelector<T> = {
  [K in keyof T]: () => T[K];
};

type WithSelectors<S, T, A> = S & {
  use: StateSelector<T>;
  getStates: () => T;
  getActions: () => A;
};

export const createSelectors = <
  T extends object,
  A extends { [key: string]: Function },
  S extends UseBoundStore<StoreApi<T & A>>
>(
  _store: S
): WithSelectors<S, T, A> => {
  const store = _store as WithSelectors<S, T, A>;
  store.use = {} as StateSelector<T>;

  // eslint-disable-next-line no-restricted-syntax
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof T]);
  }

  store.getStates = () => {
    const state = store.getState();
    const states: Partial<T> = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in state) {
      if (typeof state[key] !== 'function') {
        states[key] = state[key];
      }
    }
    return states as T;
  };

  store.getActions = () => {
    const state = store.getState();
    const actions: Partial<A> = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in state) {
      if (typeof state[key] === 'function') {
        actions[key as keyof A] = state[key] as unknown as A[keyof A];
      }
    }
    return actions as A;
  };

  return store;
};
