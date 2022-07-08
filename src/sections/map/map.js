import React, { useRef, useEffect } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

const Map = ({ center, zoom }) => {
    const ref = useRef();

    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" />;
}

const render = (status) => {
    if (status === Status.FAILURE) return <ErrorComponent />;
    return <Spinner />;
  };

const MapSection = () => {
    return (
        <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
            <Map />
        </Wrapper>
    )
}

export default MapSection