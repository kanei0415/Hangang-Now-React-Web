import images from '@assets/images';
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
  onMarkerPressed: (item: FacilityDataType) => void;
};

const Facility = ({ mapRef, centerPos, data, onMarkerPressed }: Props) => {
  return (
    <Map
      level={6}
      ref={mapRef}
      center={
        centerPos || {
          lat: 37.413294,
          lng: 127.0016985,
        }
      }
      style={{ width: '100vw', height: '100vh' }}>
      {data.map((item, index) => (
        <MapMarker
          onClick={() => onMarkerPressed(item)}
          key={index}
          image={{
            src: images.common.marker,
            size: {
              width: 60,
              height: 70,
            },
          }}
          position={{
            lat: item.y_pos,
            lng: item.x_pos,
          }}
        />
      ))}
    </Map>
  );
};

export default Facility;
