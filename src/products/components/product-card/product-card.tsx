import React from 'react';
import { Product } from '../../../store/interfaces';
import * as css from './product-card.css';
import { useHistory } from 'react-router-dom';
import { formatDisplayDate, setForEdit } from '../../../store/services';

interface Props {
  product: Product;
  width: number;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const { product, width } = props;
  const { id, name, price, created } = product;
  const history = useHistory();

  function goToEditProduct() {
    setForEdit(product);
    history.push(`/manage/${id}`);
  }

  return (
    <css.ProductCard width={width} className='product-card'>
      <css.CardContent>
        <css.Name>{name}</css.Name>
        <css.Price>{price} RON</css.Price>
        <css.CreationDate>Created at: {formatDisplayDate(new Date(created))}</css.CreationDate>
      </css.CardContent>

      <css.CardMenu>
        <css.EditButton onClick={goToEditProduct}>Edit</css.EditButton>
      </css.CardMenu>
    </css.ProductCard>
  );
}

export default ProductCard;