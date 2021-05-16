import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProductsPage from './products/pages/products-page/products.page';
import ManageProductsPage from './products/pages/manage-products-page/manage-products.page';

function App() {
  return (
    <Router>
      <Switch>
        {/** Manage Products */}
        <Route path='/manage/:id?'>
          <ManageProductsPage />
        </Route>

        {/** All Products */}
        <Route path='/'>
          <ProductsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
