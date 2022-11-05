import React from "react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";

export function MyMap() {
  const { state, dispatch } = useContext(Context);
  const [markerClick, setMarkerClick] = useState(false);
  const [center, setCenter] = useState([45.4642, 9.19]);
  //   console.log(state.allProviders[0]);
  // setCenter(state.allProviders.location)

  //   const lat = state.allProviders[0]?.location?.latitude;
  //   const lng = state.allProviders[0]?.location?.longitude;
  console.log(state);
  return (
    <div>
      <Map
        height={600}
        defaultZoom={10}
        center={state.center}
        onBoundsChanged={({ center }) => {
          setCenter(center);
        }}
      >
        {state.allProviders.map((item, i) => (
          <Marker
            key={i}
            width={50}
            anchor={[item?.location?.latitude, item?.location?.longitude]}
            onClick={() => {
              setMarkerClick(true);
            }}
          />
        ))}
        <ZoomControl />
        {/* {markerClick && <p>{"Hello"}</p>} */}
      </Map>
      <div>
        {state.allProviders.map((item, i) => (
          <p key={i}>
            {item.name} {item.location.city}
          </p>
        ))}
      </div>
    </div>
  );
}
