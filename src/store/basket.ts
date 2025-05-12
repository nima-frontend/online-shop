import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BasketItem = {
  id: string;
  name: string;
  discountPrice: number | null | undefined;
  price: number;
  image: string;
  option: string;
  description:string;
  quantity: number;
};

type BasketState = {
  items: BasketItem[];
  addItem: (item: Omit<BasketItem, 'quantity'>) => void;
  removeItem: (id: string, option: string) => void;
  clearBasket: () => void;
  increaseQuantity: (id: string, option: string) => void;
  decreaseQuantity: (id: string, option: string) => void;
};

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existingItem = get().items.find(
          (i) => i.id === item.id && i.option === item.option
        );
        if (existingItem) {
          if (existingItem.quantity >= 10) return;
          return set({
            items: get().items.map((i) =>
              i.id === item.id && i.option === item.option
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        }

        set({
          items: [...get().items, { ...item, quantity: 1 }],
        });
      },

      removeItem: (id, option) =>
        set({
          items: get().items.filter(
            (i) => i.id !== id || i.option !== option
          ),
        }),

      clearBasket: () => set({ items: [] }),

      increaseQuantity: (id, option) =>
        set({
          items: get().items.map((i) =>
            i.id === id && i.option === option && i.quantity < 10
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }),

      decreaseQuantity: (id, option) =>
        set({
          items: get().items
            .map((i) =>
              i.id === id && i.option === option
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0),
        }),
    }),
    {
      name: 'basket-storage',
    }
  )
);
