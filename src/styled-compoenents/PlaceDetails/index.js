import React from "react";
import { Header } from "../../styled-compoenents";
import {
  DescriptionContainer,
  DescriptionHeaderContainer,
  DescriptionText,
} from "./Description";

const PlaceDetails = ({ place, loadingImage, imgSrc, setActiveInMap }) => {
  return (
    <div id={`scroll_${place.name}`}>
      <DescriptionHeaderContainer>
        <Header>
          {place.name}
          <span>
            <i
              title="view on map"
              onClick={() => {
                document.getElementById("MAIN_MAP")?.scrollIntoView();
                setActiveInMap(place);
              }}
              style={{
                color: "red",
                cursor: "pointer",
              }}
              className="fas fa-map-marker-alt fa-lg"
            ></i>
          </span>
        </Header>
        <i style={{ color: "gold" }} className="fas fa-star"></i>
        {place.score.toFixed(1)}
      </DescriptionHeaderContainer>
      <DescriptionContainer bgsrc={imgSrc} loadingImage={loadingImage}>
        {loadingImage ? <i className="fas fa-circle-notch fa-spin"></i> : null}
        <DescriptionText>{place.snippet}</DescriptionText>
      </DescriptionContainer>
    </div>
  );
};

export default PlaceDetails;
