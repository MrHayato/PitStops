import GoogleMap, { Coords } from 'google-map-react';
import * as React from 'react';
import { compose, lifecycle, withState } from 'recompose';

const enhance = compose<{ center: Coords }, any>(
    withState('center', 'setCenter', { lat: 49.2577143, lng: -123.1939434 }),
    withState('zoom', 'setZoom', 7),
    lifecycle<{ setCenter: (latLng: Coords) => void, setZoom: (zoom: number) => void }, void>({
        componentWillMount() {
            navigator.geolocation.getCurrentPosition(
                (pos: Position) => {
                    this.props.setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
                    this.props.setZoom(11);
                },
            );
        },
    }),
);
export default enhance(({ center }) => {
    return (
        <GoogleMap center={center} zoom={7} />
    );
});
