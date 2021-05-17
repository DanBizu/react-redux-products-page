import React from 'react';
import { Product } from '../../../interfaces/products';
import * as css from './product-card.css';
import { useHistory } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const { product } = props;
  const { id, name, price, created } = product;
  const history = useHistory();

  function goToEditProduct() {
    history.push(`/manage/${id}`);
  }

  return (
    <css.ProductCard className='product-card'>
      <css.CardContent>
        <p>{name}</p>
        <p>{price}</p>
        <p>{created.toString()}</p>
      </css.CardContent>

      <css.CardMenu>
        <css.EditButton onClick={goToEditProduct}>Edit</css.EditButton>
      </css.CardMenu>
    </css.ProductCard>
  );
}

export default ProductCard;