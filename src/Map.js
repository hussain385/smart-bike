import React, { useEffect, useState } from "react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "./App.css";


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({lat,lng}) {
  const [Latitude, setLatitude] = useState(lat);
  const [Longitude, setLongitude] = useState(lng);
  // useEffect(() => {
  //   setLatitude=lat;
  //   setLongitude=lng;
  // }, [lat,lng]);
  return (
    <div className="map">
      <LeafletMap
        center={[Latitude, Longitude]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>latitude:{lat}, longitude:{lng}</Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
}

export default Map;
