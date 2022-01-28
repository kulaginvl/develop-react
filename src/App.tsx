import axios from 'axios';
import React from 'react';

import { AddForm } from './components/AddForm';
import { AvtoList, CarType } from './components/AvtoList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  const [data, setData] = React.useState([] as CarType[]);

  React.useEffect(() => {
    axios
      .get(
        'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json',
      )
      .then((res) => setData(res.data));
  }, []);

  const handleDel = (car: CarType) => {
    setData(data.filter((el) => el.id !== car.id));
  };

  const handleAdd = (newcar: CarType) => {
    setData(data.concat(newcar));
  };

  return (
    <>
      <Header />
      <AddForm onAddAvto={(c: CarType) => handleAdd(c)} />
      <AvtoList data={data} delAvto={(car: CarType) => handleDel(car)} />
      <Footer />
    </>
  );
};
