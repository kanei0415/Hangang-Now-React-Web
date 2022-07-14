import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from '@components/Home/containers/HomeContainer';

const RootNavigation = () => {
  return (
    <Routes>
      <Route path='*' element={<HomeContainer />} />
    </Routes>
  );
};

export default RootNavigation;
