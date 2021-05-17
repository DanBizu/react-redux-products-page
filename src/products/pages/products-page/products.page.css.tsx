import styled from 'styled-components';

export const CARD_WIDTH = 300;

export const ProductsPage = styled.div`
  height: 100%;
`;

export const ProductsBackground = styled.div`
  padding: 20px 0px;
  background-color: #f3f3f3;
  height: calc(100% - 210px);
  max-height: calc(100% - 210px);
  overflow-y: scroll;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${CARD_WIDTH}px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`;