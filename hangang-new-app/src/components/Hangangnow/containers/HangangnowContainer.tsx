import { store } from '@components/App';
import useCenterPos from '@hooks/useCenterPos';
import useParking from '@hooks/useParking';
import React, { useEffect, useRef, useState } from 'react';
import Hangangnow from '../Hangangnow';

const handler: EventListener = (e: any) => {
  store.dispatch(JSON.parse(e.data));
};

const HangangnowContainer = () => {
  const { centerPos } = useCenterPos();
  const { data } = useParking();

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

  return <Hangangnow mapRef={mapRef} centerPos={centerPos} parkings={data} />;
};

export default HangangnowContainer;
