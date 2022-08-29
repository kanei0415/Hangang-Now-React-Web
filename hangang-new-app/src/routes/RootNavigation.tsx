import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from '@components/Home/containers/HomeContainer';
import EventDetailContainer from '@components/EventDetail/containers/EventDetailContainer';
import HangangnowContainer from '@components/Hangangnow/containers/HangangnowContainer';
import FacilityContainer from '@components/Facility/containers/FacilityContainer';

const RootNavigation = () => {
  return (
    <Routes>
      <Route path='/hangangnow' element={<HangangnowContainer />} />
      <Route path='/eventDetail' element={<EventDetailContainer />} />
      <Route path='/facility' element={<FacilityContainer />} />
      <Route path='*' element={<div>404 NotFound</div>} />
    </Routes>
  );
};

export default RootNavigation;
