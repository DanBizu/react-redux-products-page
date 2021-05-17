import React from 'react';
import * as css from './product-card.css';
import { useHistory } from 'react-router-dom';

const AddCard: React.FC = () => {
  const history = useHistory();

  function goToManageProducts() {
    history.push('/manage')
  }

  return (
    <css.AddCard id='add-card'
      onClick={goToManageProducts}>
      <span>+</span>
    </css.AddCard>
  );
}

export default AddCard;
