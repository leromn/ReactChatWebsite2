import React, { useState, useEffect } from "react";
import { CurrentLocation } from "react-map-location";

import { Map, Marker } from "pigeon-maps";

export default function MapViewer() {
  const { latitude, longitude } = CurrentLocation();
  const [center, setCenter] = useState([86, 39.13]);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    setCenter([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <Map center={center} zoom={zoom}>
        <Marker width={50} anchor={center} />
      </Map>
    </div>
  );
}
