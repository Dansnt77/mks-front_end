"use client";
import styled from "styled-components";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductList } from "@/components/productList.tsx/productList";
import { ProductProvider } from "@/contexts/productsContext";
import { CartProvider } from "@/contexts/cartContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header></Header>
          <ProductProvider>
            <Container>
              <ProductList></ProductList>
            </Container>
          </ProductProvider>
        </CartProvider>
      </QueryClientProvider>

      <Footer></Footer>
    </>
  );
}

const Container = styled.div`
  padding: 3rem;
  max-width: 80%;
  height: 100%;
  margin: 0 auto;
`;
