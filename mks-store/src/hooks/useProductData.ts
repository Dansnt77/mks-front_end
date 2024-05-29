import { Product } from "@/contexts/productsContext";
import api from "@/services/api";
import { useQuery } from "react-query";

interface ProductResponse {
  products: Product[];
  count: number;
}

const fetchProducts = async (page = 1, rows = 8, sortBy = "id", orderBy = "ASC"): Promise<ProductResponse> => {
  const { data } = await api.get(`/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`);
  return data;
};

export const useProductData = (currentPage: number) => {
  return useQuery(['products', currentPage], () => fetchProducts(currentPage));
};
