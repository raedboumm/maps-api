import React from 'react';
import styled from 'styled-components';
import Map from './components/Map';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
//map style
const mapContainerStyle = { 
  width: '600px',
  height: '400px',
};

const center = {
  lat: 35.8245, // Update with your desired latitude
  lng: 10.6346, // Update with your desired longitude
};

const zoom = 13;

function App() {
  return (
    <AppContainer>
      <Map
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      />
    </AppContainer>
  );
}

export default App;
