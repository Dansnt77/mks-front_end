import React from "react";
import { useCart } from "@/contexts/cartContext";
import { CartModal } from "../header/header.styles";
import {
  CartTitle,
  EmptyCartMessage,
  FinalizePurchaseContainer,
  HeaderCart,
  ProductImage,
  ProductInfo,
  ProductItem,
  ProductList,
  ProductName,
  ProductPrice,
  QuantityInput,
  TotalPriceContainer,
} from "./card_car.styles";
import { IoMdCloseCircle } from "react-icons/io";

const Cart = () => {
  const {
    cart,
    setCart,
    removeFromCart,
    total,
    isCartVisible,
    setCartVisible,
  } = useCart();

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <CartModal>
      <HeaderCart>
        <CartTitle>Carrinho de compras</CartTitle>
        <IoMdCloseCircle onClick={toggleCartVisibility} />
      </HeaderCart>

      {cart.length === 0 ? (
        <EmptyCartMessage>Seu carrinho está vazio</EmptyCartMessage>
      ) : (
        <ProductList>
          {cart.map((item) => (
            <ProductItem key={item.id}>
              <ProductImage src={item.photo} alt={item.name} />
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <QuantityInput
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <ProductPrice>R${item.price}</ProductPrice>
                <IoMdCloseCircle
                  onClick={() => removeFromCart(item.id)}
                ></IoMdCloseCircle>
              </ProductInfo>
            </ProductItem>
          ))}
        </ProductList>
      )}
      <TotalPriceContainer>
        <h3>Total:</h3>
        <h3>R${total}</h3>
      </TotalPriceContainer>
      <FinalizePurchaseContainer>
        <h4>Finalizar Compra</h4>
      </FinalizePurchaseContainer>
    </CartModal>
  );
};

export default Cart;
