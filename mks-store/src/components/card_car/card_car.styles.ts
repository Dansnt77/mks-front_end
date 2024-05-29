import styled from "styled-components";

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  width: 50%;
  color: white;
  padding: 1rem;
`;

export const EmptyCartMessage = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: white;
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 460px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  position: relative;
  background-color: #ffffff;
  width: 85%;
  border-radius: 10px;
  margin-top: 10px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
  }

  svg {
    position: absolute;
    right: -9px;
    top: -5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;

export const TotalPriceContainer = styled.div`
  margin-top: 1rem;
  position: absolute;
  bottom: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;

  h3{
    color: white;
    font-size: 1.2rem;
  }
`;

export const QuantityInput = styled.input`
  width: 45px;
  text-align: center;
  border:1px solid  #BFBFBF;
  border-radius: 4px;
`;

export const ProductPrice = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 14px;
`;

export const ProductName = styled.h3`
  max-width: 15%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductInfo = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  gap: 30px;
`;

export const ProductImage = styled.img`
`;

export const HeaderCart = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

svg{
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
`
export const FinalizePurchaseContainer = styled.div`
background-color: #000000;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
width: 100%;
bottom: 0;
height: 60px;

h4{
  color: white;
  position: fixed;
}
`




