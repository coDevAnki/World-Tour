import React from "react";
import { Header, LinkedButton } from "../../styled-compoenents";
import { CountryImgBackground, CountryInner } from "./CountryHeroParts";

const CountryHero = ({
  imgSrc,
  pathname,
  modifiedCountryName,
  countryData: { name, id, snippet, score },
}) => {
  return (
    <CountryImgBackground src={imgSrc}>
      <CountryInner key={id}>
        <Header color="white">{name}</Header>
        <h3>
          <i style={{ color: "gold" }} className="fas fa-star"></i>
          {score.toFixed(1)}
        </h3>
        <p>{snippet}</p>
        <LinkedButton to={`${modifiedCountryName(pathname)}/${id}/cities`}>
          Top Cities In {name}
        </LinkedButton>
      </CountryInner>
    </CountryImgBackground>
  );
};

export default CountryHero;
