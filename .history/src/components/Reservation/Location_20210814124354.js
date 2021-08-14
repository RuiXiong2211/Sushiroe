import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "300px",
  height: "300px",
};
class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 1.4249754442799825, 
      lng: 103.82501271490494
    }
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
        initialCenter={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng
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
