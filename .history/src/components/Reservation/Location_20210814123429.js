import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "300",
  height: "300",
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
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(MapContainer);

export const Location = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};
