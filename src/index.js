import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './index.css';

import store from './store/store.js'
import { Provider } from 'react-redux';

import {BrowserRouter as Router} from 'react-router-dom';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Provider store={store}>
    <App />
  </Provider> 
  </Router>
  </React.StrictMode>
);
