import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const NearbySearch = () => {
  const [lat, setLat] = useState("28.61"); // default Delhi
  const [lng, setLng] = useState("77.23");
  const [keyword, setKeyword] = useState("plumber");
  const [results, setResults] = useState([]);
  const [center, setCenter] = useState([28.61, 77.23]);

  const handleSearch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mappls/nearby", {
        params: { keywords: keyword, lat, lng },
      });

      const locations = res.data.suggestedLocations || [];
      setResults(locations);

      if (locations.length > 0) {
        setCenter([locations[0].placeLatitude, locations[0].placeLongitude]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" , paddingTop:"100px"}}>
      <h2>Nearby Search</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Keyword (e.g., plumber)"
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          placeholder="Latitude"
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          placeholder="Longitude"
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleSearch}  className="px-8 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">Search</button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h3>Results:</h3>
          <ul>
            {results.map((item, idx) => (
              <li key={idx}>
                <strong>{item.placeName}</strong> - {item.placeAddress}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, height: "500px" }}>
          <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" , marginLeft:"-550px"}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {results.map((place, idx) => (
              <Marker key={idx} position={[place.placeLatitude, place.placeLongitude]}>
                <Popup>
                  <strong>{place.placeName}</strong>
                  <br />
                  {place.placeAddress}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default NearbySearch;
