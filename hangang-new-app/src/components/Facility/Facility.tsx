import { FacilityDataType } from '@store/facility/acitons';
import React, { RefObject } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

type Props = {
  mapRef: RefObject<kakao.maps.Map>;
  centerPos: {
    lat: number;
    lng: number;
  } | null;
  data: FacilityDataType[];
};

const Facility = ({ mapRef, centerPos, data }: Props) => {
  return centerPos ? (
    <Map
      ref={mapRef}
      center={centerPos}
      style={{ width: '100vw', height: '100vh' }}>
      {data.map((item, index) => (
        <MapMarker
          position={{
            lat: item.y_pos,
            lng: item.x_pos,
          }}></MapMarker>
      ))}
    </Map>
  ) : (
    <div>{'Loading...'}</div>
  );
};

export default Facility;
