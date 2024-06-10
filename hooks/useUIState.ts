// module import
import { create } from 'zustand';

interface Store {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImageSrc: (src: string) => void;
}

// store(hook) 정의
const useUIState = create<Store>((set) => ({
  // state
  homeCategory: '',
  headerImageSrc:
    'https://images.unsplash.com/photo-1707833558984-3293e794031c',

  // action
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

// export
export default useUIState;
