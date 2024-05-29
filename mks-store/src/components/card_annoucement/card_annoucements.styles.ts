

import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const ProductName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  width: 50%;
`;

export const ContainerPriceAndTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductPrice = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #373737;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  max-width: 50%;
`;

export const ProductDescription = styled.p`
  margin: 0.5rem 0 1rem 0;
  font-size: 0.875rem;
  color: #777;
`;

export const BuyButton = styled.button`
  background-color: #0f52ba;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border-top: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d47a1;
  }
`;
