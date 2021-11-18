import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import {Helmet} from "react-helmet";
import { Row } from 'react-bootstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxqb2JveWVyIiwiYSI6ImNrdXpncWhidjJwaGIyb29kOHlndWxwb28ifQ.Oep9cxy4xn-WdcL9XkfTzg';
const Locationmap = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [91.821864,22.359295],
          zoom: 13
          });
           
          map.addControl(
          new MapboxDirections({
          accessToken: mapboxgl.accessToken
          }),
          'top-left'
          );
      },[])
    return (
        <Row className="container-fluid">
        
         <div id="map"></div>
     </Row>
    );
};

export default Locationmap;