import React from 'react';
import { Product } from '../../../interfaces/products';
import { AppState } from '../../../store/app.state';
import { PRODUCTS } from '../../../store/selectors';
import * as css from './products.page.css';
import { connect } from 'react-redux';

interface Props {
  products: Product[];
}

const ProductsPage: React.FC<Props> = (props: Props) => {
  const { products } = props;
  console.log('+++ products', products);
  return (
    <css.ProductsPage className='products-page'>
      <h1>Products page</h1>

      <css.ProductsGrid>
      </css.ProductsGrid>
    </css.ProductsPage>
  );
}

function mapStateToProps(state: AppState) {
  return {
    products: PRODUCTS(state),
  }
}
export default connect(mapStateToProps)(ProductsPage);