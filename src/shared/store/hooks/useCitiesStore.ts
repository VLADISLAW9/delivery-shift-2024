import type { Point } from '@appTypes/point.ts';
import { create } from 'zustand';

interface CitiesState {
  cities?: Point[];
}

interface CitiesActions {
  setCities: (cities: Point[]) => void;
}

const initialState: CitiesState = {
  cities: undefined
};

export const useCitiesStore = create<CitiesState & CitiesActions>((set) => ({
  ...initialState,

  setCities: (newCitiesData) => {
    set(() => ({ cities: newCitiesData }));
  }
}));
