import React, {useState} from "react";
import './map.css'
import Map, {Marker, Popup} from "react-map-gl";

import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export const ScratchMap = ({locations, images}) => {
    const [popupInfo, setPopupInfo] = useState(null);
    function Pin(props) {
        const {index, location} = props
        const lat=location.locationLat
        const lng=location.locationLng

        const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

        const SIZE = 20;

        return(
            <Marker key={`marker-${index}`} longitude={lng} latitude={lat}>
                <svg
                    height={SIZE}
                    viewBox="0 0 24 24"
                    style={{
                        cursor: 'pointer',
                        fill: '#01C5FF',stroke: 'none',
                        transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                    }}
                    onClick={e => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.stopPropagation();
                        setPopupInfo(location);
                    }}
                >
                    <path d={ICON} />}
                </svg>
            </Marker>
        )

    }


    console.log("locationsInScratchMap", locations)

    return (
        <>
                    <div>
                        <h1>Map</h1>
                        <h2>Find your favorite landscape on the map</h2>
                        <Map style={{border: "15px solid grey", display: "block", margin: "0 auto", width: "55vw", height: "75vh"}}
                            initialViewState={{
                                latitude: 35.106766,
                                longitude: -106.629181,
                                zoom: 9
                            }}

                            mapboxAccessToken={'pk.eyJ1IjoibWp3MDQyNiIsImEiOiJjbDQ0cHV4ZWwwNnZrM21senNsd3B2bTlqIn0.z4F_9ytktrApsau0IDiSNQ'}
                            mapStyle="mapbox://styles/mapbox/outdoors-v11">


                            {
                                locations.map((location, index)  => <Pin location={location} index={index} key={index}/>)
                            }
                            {popupInfo && (
                                <Popup
                                    anchor="top"
                                    longitude={Number(popupInfo.locationLng)}
                                    latitude={Number(popupInfo.locationLat)}
                                    onClose={() => setPopupInfo(null)}
                                >
                                    <div>
                                        {popupInfo.locationName}
                                        {/*<a*/}
                                        {/*    target="_new"*/}
                                        {/*    href={`#${popupInfo.locationId}`}*/}
                                        {/*>*/}
                                        {/*    {popupInfo.locationName} images*/}
                                        {/*</a>*/}
                                    </div>
                                    {images.find(image=>image.imageLocationId === popupInfo.locationId) && <img alt={popupInfo.locationName} width="100%" src={images.find(image=>image.imageLocationId === popupInfo.locationId).imageUrl} />}
                                </Popup>
                            )}

                        </Map>
                    </div>
        </>
    )
}
