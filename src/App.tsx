import React, { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

//styledcomponent
import { Wrapper } from './styled';
import Card from './components/Card/Card';

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

// fetch
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const handleAddToCart = (clickedItem: CartItemType[]) => null;
const handleRemoveFromCart = () => null;

const App: React.FC = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;
  return (
    <Wrapper>
      <Grid container spacing={4}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={3}>
            <Card item={item}></Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
