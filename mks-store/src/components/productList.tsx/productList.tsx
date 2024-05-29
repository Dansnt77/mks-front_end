import React from "react";
import { useProduct } from "@/contexts/productsContext";
import {
  ProductListContainer,
  SkeletonCard,
  PaginationButton,
  PaginationContainer,
} from "./productList.styles";
import Skeleton from "react-loading-skeleton";
import { CardAnnoucement } from "../card_annoucement";

const LoadingSkeleton = () => (
  <SkeletonCard>
    <Skeleton height={200} duration={1.5} /> {}
    <Skeleton height={20} width={150} duration={1.5} />
    <Skeleton height={20} width={100} duration={1.5} />
    <Skeleton height={60} duration={1.5} />
    <Skeleton height={40} duration={1.5} />
  </SkeletonCard>
);
export const ProductList = () => {
  const { products, isLoading, count, currentPage, setCurrentPage } =
    useProduct();
  const totalPages = count ? Math.ceil(count / 8) : 0;

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <ProductListContainer>
        {}
        {isLoading
          ? Array(10)
              .fill(0)
              .map((_, index) => <LoadingSkeleton key={index} />)
          : products?.map((product) => (
              <CardAnnoucement
                key={product.id}
                photo={product.photo}
                name={product.name}
                description={product.description}
                price={product.price}
                id={product.id}
              />
            ))}
      </ProductListContainer>
      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Anterior
        </PaginationButton>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};
