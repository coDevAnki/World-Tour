import React,{useEffect} from "react";
import { useLocation } from "react-router";
import noImage from "../../assets/no_image-600x490-removebg-preview.png";
import { Header, LinkedButton, Wrapper } from "../../styled-compoenents";
import { TopCityImgContainer, TopCityTextContainer } from "./TopCityParts";

const TopCity = ({ city, loadingImage, imgSrc, setActiveInMap }) => {
  const { pathname } = useLocation();
  return (
    <Wrapper id={`scroll_${city.name}`}>
      <TopCityTextContainer>
        <Header>
          {city.name}
          <span>
            <i
              title="view on map"
              onClick={() => {
                document.getElementById("MAIN_MAP")?.scrollIntoView();
                setActiveInMap(city);
              }}
              style={{ color: "red", cursor: "pointer" }}
              className="fas fa-map-marker-alt fa-lg"
            ></i>
          </span>
        </Header>
        <div>
          {city.score.toFixed(1)}
          <i style={{ color: "gold" }} className="fas fa-star"></i>
        </div>
        <p>{city.snippet}</p>
        <LinkedButton to={`${pathname}/${city.id}`}>
          explore {city.name}
        </LinkedButton>
      </TopCityTextContainer>
      <TopCityImgContainer>
        {loadingImage ? <i className="fas fa-circle-notch fa-spin"></i> : null}
        <img src={imgSrc || noImage} alt="" />
      </TopCityImgContainer>
    </Wrapper>
  );
};

export default TopCity;