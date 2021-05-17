import React from 'react';
import * as css from './product-card.css';
import { useHistory } from 'react-router-dom';

interface Props {
  width: number;
}

const AddCard: React.FC<Props> = (props: Props) => {
  const { width } = props;
  const history = useHistory();

  function goToManageProducts() {
    history.push('/manage')
  }

  return (
    <css.AddCard width={width} id='add-card'
      onClick={goToManageProducts}>
      <span>+</span>
    </css.AddCard>
  );
}

export default AddCard;
