import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCityDetails, getImage } from "../api/axios";
import { usePromise } from "../custom-hooks";
import { Map, PlaceDetails } from "../styled-compoenents";

const PlaceDetailsPage = () => {
  const { placeName } = useParams();
  const [activeInMap, setActiveInMap] = useState();
  const {
    loading: loadingCityDetails,
    response: responseCityDetails,
  } = usePromise(() => getCityDetails(placeName), [placeName]);

  const { loading: loadingImage, response: responseImage } = usePromise(() => {
    if (!responseCityDetails?.data?.results) return;
    return Promise.all(
      responseCityDetails?.data.results.map(({ name }) =>
        getImage(name + " " + placeName)
      )
    );
  }, [responseCityDetails]);

  if (loadingCityDetails) return <div>Loading...</div>;
  return (
    <div>
      <Map
        dataForMarker={responseCityDetails?.data.results.map(
          ({ name, coordinates }) => ({ name, ...coordinates })
        )}
        activeInMap={activeInMap}
        setActiveInMap={setActiveInMap}
        zoom={12}
      />
      {responseCityDetails?.data.results.map((place, index) => (
        <PlaceDetails
          place={place}
          imgSrc={
            responseImage
              ? responseImage[index].data?.hits[2]?.largeImageURL
              : ""
          }
          setActiveInMap={setActiveInMap}
          loadingImage={loadingImage}
        />
      ))}
    </div>
  );
};

export default PlaceDetailsPage;
