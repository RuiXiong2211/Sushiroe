import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export class MapContainer extends React.Component {
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
      <Map google={this.props.google} onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: { apiKey },
})(MapContainer);

export const Location = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};
