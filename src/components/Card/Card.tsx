import React from 'react';
import { Button } from '@material-ui/core';
import { Wrapper } from './Styles';

import { CartItemType } from '../../App';

type Props = {
  item: CartItemType;
  handleAddToCart?: (clickedItem: CartItemType) => void;
};

const Card: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { image, description, title, amount, price } = item;
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>₦{price}</h3>
      </div>
      {/* <Button onClick={() => handleAddToCart(item)}></Button> */}
      <Button>Add to Cart</Button>
    </Wrapper>
  );
};

export default Card;
