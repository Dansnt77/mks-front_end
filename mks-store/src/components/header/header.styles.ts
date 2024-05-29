import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0F52BA;
  padding: 1rem 6rem;
  color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
  }

  span {
    font-size: 1rem;
  }
`;

export const CartModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #0F52BA;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 1000;
`;