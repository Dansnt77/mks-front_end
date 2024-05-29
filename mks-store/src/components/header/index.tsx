"use client";
import { FaShoppingCart } from "react-icons/fa";
import { CartContainer, HeaderContainer, LogoContainer } from "./header.styles";
import Cart from "../card_car";
import { useCart } from "@/contexts/cartContext";

export const Header = () => {
  const { cart, setCartVisible, isCartVisible } = useCart();

  const totalItems = cart.length;

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <h3>MKS</h3>
          <h4>Sistemas</h4>
        </LogoContainer>
        <CartContainer onClick={toggleCartVisibility}>
          <FaShoppingCart />
          <span>{totalItems}</span>
        </CartContainer>
      </HeaderContainer>
      {isCartVisible && <Cart />}
    </>
  );
};
