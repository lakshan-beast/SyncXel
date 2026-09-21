import { create } from 'zustand';

const useGameStore = create((set) => ({
  gameCoinsCollected: 0,
  isGameOver: false,
  isPlaying: false,

  startGame: () => set({ isPlaying: true, isGameOver: false, gameCoinsCollected: 0 }),
  collectCoin: () => set((state) => ({ gameCoinsCollected: state.gameCoinsCollected + 1 })),
  endGame: () => set({ isGameOver: true, isPlaying: false })
}));

export default useGameStore;