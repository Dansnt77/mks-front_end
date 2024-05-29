import React, { createContext, useContext, useState, ReactNode } from "react";
import { useProductData } from "@/hooks/useProductData";

interface Props {
  children: ReactNode;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

interface ProductProviderData {
  products: Product[] | undefined;
  count: number;
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useProductData(currentPage);

  const products = data?.products;
  const count = data ? Math.ceil(data.count / 8) : 1;

  return (
    <ProductContext.Provider
      value={{
        products,
        count,
        isLoading,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
