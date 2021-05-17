import { Action, Product } from "./interfaces";
import { AppState, initialState } from "./app.state";
import * as actions from "./actions";

export function reducer(state: AppState = initialState, action: Action<any>): AppState {
  switch (action.type) {
    case actions.SET_FOR_EDIT: {
      return {
        ...state,
        forEdit: action.payload
      }
    }

    case actions.UPDATE_PRODUCT: {
      const updatedProduct = action.payload;

      const { id } = updatedProduct;

      const currentProducts = [...state.products];
      const currentProduct = currentProducts.find(product => product.id === id) as Product;
      const index = currentProducts.indexOf(currentProduct);

      currentProducts.splice(index, 1, updatedProduct);
      return {
        ...state,
        products: [...currentProducts]
      }
    }

    default:
      return state;
  }
}