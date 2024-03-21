import { createContext, useContext, useState, ReactNode } from "react";

interface ContextType {
  addToCart: (item: string) => void;
  removeCart: (itemId: string[]) => void;
  clearCart: () => void;
}

interface CreateCartProvider {
  children: ReactNode;
}

export const createCart = createContext<ContextType | undefined>(undefined);

export function useCart() {
  return useContext(createCart);
}

export const CreateCartProvider: React.FC<CreateCartProvider> = ({
  children,
}) => {
  const [addCart, setAddCart] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setAddCart([...addCart, item]);
  };

  const removeCart = (itemId: string[]) => {
    setAddCart((prevCart) => prevCart.filter((item) => !itemId.includes(item)));
  };

  const clearCart = () => {
    setAddCart([]);
  };

  const value: ContextType = {
    addToCart,
    removeCart,
    clearCart,
  };

  return <createCart.Provider value={value}>{children}</createCart.Provider>;
};
