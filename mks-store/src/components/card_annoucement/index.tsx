"use client";

import { useCart } from "@/contexts/cartContext";
import {
  BuyButton,
  CardContainer,
  CardContent,
  ContainerPriceAndTitle,
  ImageContainer,
  ProductDescription,
  ProductName,
  ProductPrice,
} from "./card_annoucements.styles";

interface ProductCardProps {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

export const CardAnnoucement: React.FC<ProductCardProps> = ({
  id,
  photo,
  name,
  description,
  price,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1, photo });
  };

  return (
    <CardContainer>
      <ImageContainer>
        <img src={photo} alt={name} />
      </ImageContainer>
      <CardContent>
        <ContainerPriceAndTitle>
          <ProductName>{name}</ProductName>
          <ProductPrice>R${price}</ProductPrice>
        </ContainerPriceAndTitle>
        <ProductDescription>{description}</ProductDescription>
      </CardContent>
      <BuyButton onClick={handleAddToCart}>COMPRAR</BuyButton>
    </CardContainer>
  );
};
