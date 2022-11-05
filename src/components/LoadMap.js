import React from "react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useContext } from "react";
import { Context } from "./Context";

export function MyMap() {
  const { state, dispatch } = useContext(Context);

  console.log(state.allProviders[0]);

  return (
    <div>
      <Map height={600} defaultCenter={[45.4642, 9.19]} defaultZoom={10}>
        {state.allProviders.map((item, i) => (
          <Marker
            key={i}
            width={50}
            anchor={[item?.location?.latitude, item?.location?.longitude]}
          />
        ))}
        <ZoomControl />
      </Map>
      <div>{state.allProviders.map((item, i) => item.id)}</div>
    </div>
  );
}

// const LoadMap = (props) => {
//   console.log(props.data);
//   return <div>LoadMap</div>;
// };

// export default LoadMap;
