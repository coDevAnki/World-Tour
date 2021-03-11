import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCountryDetails, getImage } from "../api/axios";
import { usePromise } from "../custom-hooks";
import { CountryContent, Map } from "../styled-compoenents";
import CountryHero from "../styled-compoenents/CountryHero";

const CountryPage = () => {
  const { country } = useParams();
  const { pathname } = useLocation();

  const { loading: loadingData, response: responseData } = usePromise(
    () => getCountryDetails(country),
    [country]
  );

  const { loading: loadingImg, response: responseImg } = usePromise(() =>
    getImage(country.replaceAll("_", " "))
  );

  if (loadingData) return <div>loading</div>;

  const modifiedCountryName = (country) => {
    return country.slice(0, country.lastIndexOf("/"));
  };

  const finalCountry = responseData?.data?.results
    .filter(
      (item, index) =>
        item.id == country ||
        item.name == country ||
        index === 0 ||
        item.name.includes(country)
    )
    .slice(-1);

  return finalCountry ? (
    <>
      {finalCountry.map(({ name, id, snippet, score, content, properties }) => (
        <>
          <CountryHero
            imgSrc={responseImg?.data?.hits[0].largeImageURL}
            pathname={pathname}
            countryData={{ name, id, snippet, score }}
            modifiedCountryName={modifiedCountryName}
          />
          <Map
            id="country-map"
            country={finalCountry}
            halfScreen
            center={finalCountry?.coordinates}
          />
          <CountryContent countryData={{ properties, content }} />
        </>
      ))}
    </>
  ) : null;
};

export default CountryPage;
