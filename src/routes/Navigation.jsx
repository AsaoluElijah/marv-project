import { useState } from "react";
import Select from "react-select";
import GoogleMapReact from "google-map-react";

const Navigation = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 40.712776,
    longitude: -74.005974,
    label: "School Auditorium",
  });

  const options = [
    {
      value: { latitude: 40.712776, longitude: -74.005974 },
      label: "School Auditorium",
    },
    {
      value: { latitude: 40.713012, longitude: -74.006235 },
      label: "School Gate",
    },
    {
      value: { latitude: 40.712342, longitude: -74.005863 },
      label: "Dr. John's Office",
    },
    {
      value: { latitude: 40.712921, longitude: -74.006053 },
      label: "VC Office",
    },
    {
      value: { latitude: 40.712432, longitude: -74.006752 },
      label: "Engineering Building",
    },
    {
      value: { latitude: 40.712932, longitude: -74.007132 },
      label: "Library",
    },
    {
      value: { latitude: 40.713232, longitude: -74.006932 },
      label: "Student Center",
    },
  ];

  const handleSelect = (option) => {
    setSelectedLocation({
      latitude: option.value.latitude,
      longitude: option.value.longitude,
      label: option.label,
    });
  };

  return (
    <div className="container mx-auto h-screen">
      <div
        className="mt-4 p-3 search-area"
        style={{ position: "relative", zIndex: "1000" }}
      >
        <Select
          options={options}
          onChange={handleSelect}
          styles={{
            control: (provided) => ({
              ...provided,
              minHeight: "50px",
              height: "50px",
            }),
          }}
          className="h-[50px]"
        />
      </div>
      <div className="flex flex-col h-[90vh]">
        <div
          id="ar-container"
          className="flex-grow bg-blue-500 text-white flex items-center justify-center"
        >
          <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
            renderer="antialias: true; alpha: true"
          >
            <a-camera gps-new-camera="gpsMinDistance: 5"></a-camera>

            <a-entity
              gps-new-entity-place="latitude: 6.482558; longitude: 4.7875728"
              scale="1000 1000 1000"
            >
              <a-plane
                width="2"
                height="1"
                material="shader: flat; src: #overlayTexture;"
              ></a-plane>
              <a-text
                value={selectedLocation.label}
                width="2"
                align="center"
                position="0 0.1 0"
                color="black"
              ></a-text>
            </a-entity>
          </a-scene>
        </div>
        <div className="flex-grow bg-green-500 text-white flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Navigation;
