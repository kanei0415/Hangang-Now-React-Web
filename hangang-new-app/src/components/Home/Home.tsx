import React, { RefObject } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

type Props = {
  mapRef: RefObject<kakao.maps.Map>;
};

const Home = ({ mapRef }: Props) => {
  return (
    <Map
      ref={mapRef}
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: '100vw', height: '100vh' }}>
      <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
        <div
          style={{ padding: '42px', backgroundColor: '#fff', color: '#000' }}>
          Custom Overlay!
        </div>
      </CustomOverlayMap>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
    </Map>
  );
};

export default Home;
