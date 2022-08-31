import images from '@assets/images';
import { ParkingMarkerTypes } from '@store/parking/modules/actionTypes';
import React, { RefObject } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

type Props = {
  mapRef: RefObject<kakao.maps.Map>;
  centerPos: {
    lat: number;
    lng: number;
  } | null;
  parkings: ParkingMarkerTypes[];
  onMarkerPressed: (item: ParkingMarkerTypes) => void;
};

const Hangangnow = ({
  mapRef,
  centerPos,
  parkings,
  onMarkerPressed,
}: Props) => {
  return centerPos ? (
    <Map
      ref={mapRef}
      center={centerPos}
      style={{ width: '100vw', height: '100vh' }}>
      {parkings.map((item, index) => (
        <MapMarker
          onClick={() => onMarkerPressed(item)}
          image={{
            src: images.common.marker,
            size: {
              width: 60,
              height: 70,
            },
          }}
          position={{
            lat: item.local.y_pos,
            lng: item.local.x_pos,
          }}></MapMarker>
      ))}
    </Map>
  ) : (
    <div>{'Loading...'}</div>
  );
};

export default Hangangnow;
