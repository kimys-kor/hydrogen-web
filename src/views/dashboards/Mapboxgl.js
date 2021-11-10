import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl, FlyToInterpolator } from 'react-map-gl';
import { Button, Row, Col, Card } from 'react-bootstrap';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Mapboxgl.css'

const storeList = [
    { name: 'CU', location: [37.565964, 126.986574] },
    { name: '할리스', location: [37.564431, 126.986591] },
    { name: '세븐일레븐', location: [37.565188, 126.983238] },
    { name: '파리바게트', location: [37.564869, 126.984450] },
    { name: '스타벅스', location: [37.562003, 126.985829] }
    ];



const Mapbox = () => {
    const MAP_TOKEN = 'pk.eyJ1IjoieXMybGlmZSIsImEiOiJja3Vxbnp0M2I0eGIzMzBxanI2N3RtZ2R1In0.Tici35b6HGH1bsU-huCrVg';
    const [viewport, setViewport] = useState({
        latitude: 37.5326,
        longitude: 127.024612,
        width: '95vw',
        height: '60vh',
        zoom: 12,
    });
    return (
        <div className="Mapbox">
            <ReactMapGL
            {...viewport}
            transitionDuration={800}
            transitionInterpolator={new FlyToInterpolator()}
            mapboxApiAccessToken={MAP_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onViewportChange={(view) => {
                setViewport(view);
            }}
            >
            <div className="navi-control">
                <NavigationControl />
            </div>
            {storeList.map((store, i) => (
                <Marker key={i} latitude={store.location[0]} longitude={store.location[1]}>
                <Button />
            
                </Marker>
            ))}
            </ReactMapGL>
        </div>
    );
};




    
export default Mapbox;
    
