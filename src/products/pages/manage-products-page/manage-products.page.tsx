import React, { FormEvent, useEffect } from 'react';
import { useParams, withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../store/app.state';
import { NewProduct, Product } from '../../../store/interfaces';
import { FOR_EDIT } from '../../../store/selectors';
import { connect } from 'react-redux';
import * as css from './manange-products.page.css';
import { addProduct, formatSaveDate, updateProduct } from '../../../store/services';

interface Props extends RouteComponentProps {
  product: Product;
}
interface RouteParams {
  id: string | undefined;
}

const ManageProductsPage: React.FC<Props> = (props: Props) => {
  const { id } = useParams<RouteParams>();
  const { product } = props;
  const { id: productId, name, price } = product;
  const [editMode, setEditMode] = React.useState(false);
  const [newName, setNewName] = React.useState('');
  const [newPrice, setNewPrice] = React.useState('');

  useEffect(() => {
    // Check if we edit an existing product or we're adding a new one.
    if (productId && id && productId.toString() === id) {
      setEditMode(true);
    }
  }, [productId, id])

  // If in edit mode, initialize the 'name' and 'price'
  useEffect(() => {
    if (editMode) {
      setNewName(name);
      setNewPrice(price.toString());
    }
  }, [editMode, name, price])

  /**
   * Update the product or add a new product
   * @param {FormEvent} e submit event
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (editMode) {
      // Update the value
      const updatedProduct: Product = {
        ...product,
        name: newName,
        price: parseFloat(newPrice),
      }

      updateProduct(updatedProduct)
    } else {
      const created = formatSaveDate(new Date());

      // Add a new product
      const newProduct: NewProduct = {
        name: newName,
        price: parseFloat(newPrice),
        created,
      }

      addProduct(newProduct);
    }
  }

  console.log('+++ id', id);
  console.log('+++ product', product);

  return (
    <css.ManageProducts className='manage-products'>
      <h1>
        Manage products page
      </h1>

      <css.Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={newName} onChange={(e) => setNewName(e.target.value)} />

        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />

        <input type="submit" value={editMode ? "Save" : "Add"} />
      </css.Form>
    </css.ManageProducts>

  );
}

function mapStateToProps(state: AppState) {
  return {
    product: FOR_EDIT(state),
  }
}

export default withRouter(connect(mapStateToProps)(ManageProductsPage));