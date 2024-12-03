import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./abroad.css";
import L from "leaflet";

const pastelColors = [
  "#CC6A6E",
  "#CC8A5E",
  "#CCCC5E",
  "#5ECC8A",
  "#5EAACC",
  "#8A5ECC",
];

function MainMap({ universities, onSelectUniversity }) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const initialColors = universities.map(
      () => pastelColors[Math.floor(Math.random() * pastelColors.length)],
    );
    setColors(initialColors);
  }, [universities]);

  const bounds = [
    [-85, -190],
    [85, 190],
  ];

  const createColoredIcon = (color) => {
    const encodedColor = encodeURIComponent(color);
    return new L.Icon({
      iconUrl: `data:image/svg+xml,
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path fill="${encodedColor}" d="M16 0C9.373 0 4 5.373 4 12c0 5.523 7.333 15.083 11.302 19.254a1.5 1.5 0 0 0 2.396 0C20.667 27.083 28 17.523 28 12 28 5.373 22.627 0 16 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
        </svg>`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // eslint-disable-next-line no-undef
      shadowUrl: "/leaflet/marker-shadow.png",
      shadowSize: [41, 41],
      shadowAnchor: [12, 41],
    });
  };

  return (
    <MapContainer
      className="map-container"
      center={[15.45, 18.73]}
      zoom={2.3}
      maxBounds={bounds}
      maxBoundsViscosity={0.7}
      scrollWheelZoom={true}
      maxZoom={18}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {universities.map((university, index) => {
        const [latitude, longitude] = university.location.coordinates;
        if (latitude && longitude) {
          const iconColor = colors[index];
          const coloredIcon = createColoredIcon(iconColor);

          return (
            <Marker
              key={index}
              position={[latitude, longitude]}
              icon={coloredIcon}
              eventHandlers={{
                click: () => onSelectUniversity(university.name),
                popupclose: () => onSelectUniversity(null), // Deselects on popup close
              }}
            >
              <Popup>
                <strong>{university.name}</strong>
                <p>{`${university.location.city}, ${university.location.country}`}</p>
              </Popup>
            </Marker>
          );
        } else {
          console.error(`Invalid coords for ${university.name}`);
          return null;
        }
      })}
    </MapContainer>
  );
}

export default MainMap;
