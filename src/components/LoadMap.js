import React from "react";

import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";

export function MyMap() {
  const { state, dispatch } = useContext(Context);
  const [markerClick, setMarkerClick] = useState(false);
  const [center, setCenter] = useState([]);
  const [item, setItem] = useState("");

  const handleClick = (item) => {
    setMarkerClick(!markerClick);
    setItem(item);
  };

  console.log(item);
  console.log(state.foundProviders);
  return (
    <div>
      <Map height={600} defaultZoom={11} center={state.center}>
        {state.allProviders.map((item, i) => (
          <Marker
            key={i}
            width={50}
            anchor={[item?.location?.latitude, item?.location?.longitude]}
            onClick={() => handleClick(item)}
          />
        ))}
        <Overlay anchor={state.center} offset={[50, 200]}>
          {markerClick &&
            state.foundProviders.map((item, i) => (
              <p key={i} style={{ fontSize: "3rem" }} className="text-3rem">
                {item.name}
              </p>
            ))}
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
