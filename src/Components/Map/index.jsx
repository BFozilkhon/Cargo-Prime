import React from "react";
import { Container, Header, Wrapper } from "./style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export const Map = () => {
  const { REACT_APP_MAP_APIKEY: mapKey } = process.env;
  const { isLoaded } = useJsApiLoader({
    id: "polymergas",
    googleMapsApiKey: mapKey,
  });
  return (
    <Container>
      <Header>Where we Located</Header>
      <Wrapper>
        {isLoaded && (
          <GoogleMap
            id="polymergas"
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              zIndex: "999",
            }}
            center={{ lat: 41.25776587173935, lng: 69.1497293270331 }}
            zoom={13}
          >
            <Marker
              position={{ lat: 41.25776587173935, lng: 69.1497293270331 }}
            />
          </GoogleMap>
        )}
      </Wrapper>
    </Container>
  );
};

export default Map;
