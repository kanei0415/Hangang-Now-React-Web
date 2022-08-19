import { store } from '@components/App';
import React, { useEffect, useRef } from 'react';
import Home from '../Home';
import useCenterPos from '@hooks/useCenterPos';

const handler: EventListener = (e: any) => {
  store.dispatch(JSON.parse(e.data));
};

const HomeContainer = () => {
  const { centerPos } = useCenterPos();

  const mapRef = useRef<kakao.maps.Map>(null);

  useEffect(() => {
    document.addEventListener('message', handler);

    return () => {
      document.removeEventListener('message', handler);
    };
  }, []);

  useEffect(() => {
    if (centerPos) {
      mapRef?.current?.setCenter(
        new kakao.maps.LatLng(centerPos.lat, centerPos.lng),
      );
    }
  }, [mapRef, centerPos]);

  return <Home mapRef={mapRef} />;
};

export default HomeContainer;
