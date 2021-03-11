import L from "leaflet";
import React, { useEffect, useRef } from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import styled from "styled-components";
import markerIcon from "../../assets/marker.svg";

const myIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [40, 40],
  iconAnchor: [18, 40],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});
const PopupContainer = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PopupButton = styled.button`
  background-color: var(--clr-bg);
  outline: none;
  border: 1px solid;
  padding: 0.5em 1em;
  margin: 1em;
  cursor: pointer;
  display: block;
`;
const MapPopup = ({ each, activeInMap, setActiveInMap }) => {
  const markerRef = useRef();

  useEffect(() => {
    if (activeInMap && each.name === activeInMap.name) {
      if (!markerRef?.current?.isPopupOpen()) {
        markerRef.current.openPopup();
      }
    }
  }, [activeInMap]);

  return (
    <Marker ref={markerRef} position={[each.latitude, each.longitude]}>
      <Popup
        onOpen={() => {
          setActiveInMap(each);
        }}
        ref={markerRef}
      >
        <PopupContainer>
          {each.name}
          <PopupButton
            onClick={() => {
              document.getElementById("scroll_" + each.name)?.scrollIntoView();
            }}
          >
            Details
          </PopupButton>
        </PopupContainer>
      </Popup>
      <Tooltip>{each.name}</Tooltip>
    </Marker>
  );
};

export default MapPopup;
