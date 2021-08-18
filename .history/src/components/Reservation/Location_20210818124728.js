import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
require('dotenv').config()
/*
component for google maps api
*/
const key = process.env.REACT_APP_GOOGLE_KEY
console.log(key);

const containerStyle = {
  display: "inline-block",
  position: "relative",
  width: "400px",
  height: "300px",
};
class MapContainer extends React.Component {
  state = {
    mapCenter: {
      lat: 1.4249754442799825, 
      lng: 103.82501271490494
    }
  };

  render() {
    return (
      <Map
        zoom={15}
        google={this.props.google}
        containerStyle={containerStyle}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng
        }}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);

export const Location = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};
