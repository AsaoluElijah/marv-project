import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
const Map = () => {
  const [isMounted, setisMounted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 40.712776,
    longitude: -74.005974,
    label: "School Auditorium",
  });
  useEffect(() => {
    setisMounted(true);
  }, []);

  return (
    <div>
      {isMounted && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDfDCV5hXiPamCIT8_vwGXuzimLQ9MF76g",
          }}
          center={{
            lat: selectedLocation.latitude,
            lng: selectedLocation.longitude,
          }}
          defaultZoom={16}
        ></GoogleMapReact>
      )}
    </div>
  );
};

export default Map;
