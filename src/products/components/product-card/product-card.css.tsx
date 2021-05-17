import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 3px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContent = styled.div``;

export const AddCard = styled(ProductCard)`
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    text-align: center;
    vertical-align: middle;
    background: none;
    border: none;
    outline: none;
    font-size: 40px;
    color: #bdbdbd;
    padding: 0px;
    cursor: pointer;
  }

  :hover {
    span {
      font-size: 44px;
    }
  }
`;

export const CardMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  width: 100%;
  height: 40px;
  background: #2ecc71;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  color: #f3f3f3;
  text-transform: uppercase;
  cursor: pointer;
`;
