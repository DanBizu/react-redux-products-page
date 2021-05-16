import styled from 'styled-components';

export const ProductsPage = styled.div`
  padding: 60px 40px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`;