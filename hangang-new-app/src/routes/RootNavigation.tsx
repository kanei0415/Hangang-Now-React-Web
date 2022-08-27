import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from '@components/Home/containers/HomeContainer';
import EventDetailContainer from '@components/EventDetail/containers/EventDetailContainer';
import HangangnowContainer from '@components/Hangangnow/containers/HangangnowContainer';

const RootNavigation = () => {
  return (
    <Routes>
      <Route path='/hangangnow' element={<HangangnowContainer />} />
      <Route path='/eventDetail' element={<EventDetailContainer />} />
      <Route path='*' element={<HomeContainer />} />
    </Routes>
  );
};

export default RootNavigation;
