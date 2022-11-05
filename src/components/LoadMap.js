import React from "react";

import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";

export function MyMap() {
  const { state, dispatch } = useContext(Context);
  const [markerClick, setMarkerClick] = useState(false);
  const [center, setCenter] = useState([]);

  return (
    <div>
      <Map height={600} defaultZoom={11} center={state.center}>
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
        <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
          <img src="../logo.svg" width={240} height={158} alt="" />
          {/* {markerClick && <p>{"Hello"}</p>} */}
        </Overlay>
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
