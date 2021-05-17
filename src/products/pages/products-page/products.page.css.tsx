import styled from 'styled-components';

export const CARD_WIDTH = 300;

export const ProductsPage = styled.div``;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${CARD_WIDTH}px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`;