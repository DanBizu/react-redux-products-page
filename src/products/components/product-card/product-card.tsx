import React from 'react';
import { Product } from '../../../store/interfaces';
import * as css from './product-card.css';
import { useHistory } from 'react-router-dom';
import { setForEdit } from '../../../store/services';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const { product } = props;
  const { id, name, price, created } = product;
  const history = useHistory();

  function goToEditProduct() {
    setForEdit(product);
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