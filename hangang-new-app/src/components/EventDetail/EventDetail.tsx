import React, { RefObject } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

type Props = {
  mapRef: RefObject<kakao.maps.Map>;
  centerPos: {
    lat: number;
    lng: number;
  } | null;
};

const EventDetail = ({ mapRef, centerPos }: Props) => {
  return centerPos ? (
    <Map
      ref={mapRef}
      center={centerPos}
      style={{ width: '100vw', height: '100vh' }}>
      <MapMarker position={centerPos} />
    </Map>
  ) : null;
};

export default EventDetail;
