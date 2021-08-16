import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  display: "inline-block",
  position: "relative",
  width: "420px",
  height: "250px",
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
  apiKey: "AIzaSyD26vQ-XwFmYsgv4sY2hQFeWHi8pnf8GMk"
})(MapContainer);

export const Location = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};
