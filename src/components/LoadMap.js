import React from "react";

import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";

export function MyMap() {
  const { state, dispatch } = useContext(Context);
  const [markerClick, setMarkerClick] = useState(false);
  const [center, setCenter] = useState([]);
  const [zoom, setZoom] = useState(11);
  const [item, setItem] = useState("");

  const handleClick = (item) => {
    setMarkerClick(!markerClick);
    setItem(item);
  };

  return (
    <div>
      <Map
        onClick={() => setMarkerClick(false)}
        height={600}
        // defaultZoom={11}
        center={state.center}
        zoom={state.zoom}
      >
        {state.foundProviders.length === 0
          ? state.allProviders.map((item, i) => (
              <Marker
                key={i}
                width={50}
                anchor={[item?.location?.latitude, item?.location?.longitude]}
                onClick={() => handleClick(item)}
              />
            ))
          : state.foundProviders.map((item, i) => (
              <Marker
                key={i}
                width={50}
                anchor={[item?.location?.latitude, item?.location?.longitude]}
                onClick={() => handleClick(item)}
              />
            ))}
        <Overlay anchor={state.center} offset={[50, 200]}>
          {markerClick && (
            <p
              style={{ fontSize: "2rem" }}
              className="bg-gray-400 rounded-[1rem] p-2 mb-2"
            >
              {item.name} - {item.location.city}
            </p>
          )}

          {/* {markerClick &&
            state.foundProviders.map((item, i) => (
              <p
                key={i}
                style={{ fontSize: "2rem" }}
                className="bg-gray-400 rounded-[1rem] p-2 mb-2"
              >
                {item.name} - {item.location.city}
              </p>
            ))} */}
        </Overlay>
        <ZoomControl />
      </Map>
      <div>
        {state.foundProviders.length === 0
          ? state.allProviders.map((item, i) => (
              <p key={i}>
                {item.name} {item.location.city}
              </p>
            ))
          : state.foundProviders.map((item, i) => (
              <p key={i}>
                {item.name} {item.location.city}
              </p>
            ))}
      </div>
    </div>
  );
}
