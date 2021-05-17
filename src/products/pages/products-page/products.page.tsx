import React from 'react';
import { Product } from '../../../store/interfaces';
import { AppState } from '../../../store/app.state';
import { PRODUCTS } from '../../../store/selectors';
import * as css from './products.page.css';
import { connect } from 'react-redux';
import ProductCard from '../../components/product-card/product-card';
import AddCard from '../../components/product-card/add-card';

interface Props {
  products: Product[];
}

const ProductsPage: React.FC<Props> = (props: Props) => {
  const { products } = props;

  return (
    <css.ProductsPage className='products-page'>
      <h1>Products page</h1>

      {
        !!products.length ?
        <css.ProductsBackground>
          <css.ProductsGrid>
            {
              products.map((product, key) =>
                <ProductCard key={key} product={product} width={css.CARD_WIDTH}/>
              )
            }
            <AddCard width={css.CARD_WIDTH}/>
          </css.ProductsGrid>
        </css.ProductsBackground>
        :
        <p>No products ...</p>
      }

    </css.ProductsPage>
  );
}

function mapStateToProps(state: AppState) {
  return {
    products: PRODUCTS(state),
  }
}
export default connect(mapStateToProps)(ProductsPage);