import React from 'react';
import { Product } from '../../../interfaces/products';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const { product } = props;
  const { name, price, created } = product;

  return (
    <div className='product-card'>
      <p>{name}</p>
      <p>{price}</p>
      <p>{created}</p>
    </div>
  );
}

export default ProductCard;