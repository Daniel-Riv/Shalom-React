import React from 'react';
import { ListCard } from '../Components/Home/Cards/ListCard';
import { Carrousel } from '../Components/Home/Carrousel/Carrousel';
import { Welcome } from '../Components/Home/Welcome/Welcome';
import { Title } from '../Components/Utils/Title/Title';

export const HomePages = () => {
  return (
    <>
        <Carrousel />
        <Welcome />
        <Title title="Nuestros Productos" />
        <ListCard />
    </>
  )
}
