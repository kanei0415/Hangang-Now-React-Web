import { store } from '@components/App';
import useCenterPos from '@hooks/useCenterPos';
import React, { useEffect, useRef } from 'react';
import EventDetail from '../EventDetail';

const handler: EventListener = (e: any) => {
  store.dispatch(JSON.parse(e.data));
};

const EventDetailContainer = () => {
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

  return <EventDetail mapRef={mapRef} centerPos={centerPos} />;
};

export default EventDetailContainer;
