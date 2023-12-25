import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ mapContainerStyle, center, zoom }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg
      " // api key 
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
