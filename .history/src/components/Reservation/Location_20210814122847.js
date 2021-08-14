import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
require('dotenv').config()

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
console.log(apiKey);

const containerStyle = {
  position: "relative",
  width: "1000px",
  height: "1000px",
};
class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        zoom={10}
        google={this.props.google}
        containerStyle={containerStyle}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: {apiKey}
})(MapContainer);

export const Location = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};
