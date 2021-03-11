import React from "react";
import { PlaceCard, PlaceCardWrapper } from "..";
import { getImage } from "../../api/axios";
import { usePromise } from "../../custom-hooks";

const SearchResults = ({ data }) => {
  const { loading: imgLoading, response: imgResponse, error } = usePromise(
    () => Promise.all(data.map((item) => getImage(item.name))),
    [data]
  );

  if (Array.isArray(data) && data.length === 0)
    return <>Sorry, No Results Found</>;

  return (
    <PlaceCardWrapper>
      {Array.isArray(data) ? (
        data.map(({ id, name, type, country_id }, index) => (
          <PlaceCard
            to={
              type === "city"
                ? `/region/${country_id.replaceAll(
                    " ",
                    "_"
                  )}/cities/${id.replaceAll(" ", "_")}`
                : `/region/${id.replaceAll(" ", "_")}`
            }
          >
            <div>{type}</div>

            <PlaceCard.SubHeader mt="10%">{name}</PlaceCard.SubHeader>
            <PlaceCard.Background bgHeight="80%">
              {imgResponse ? (
                <img
                  src={imgResponse[index]?.data?.hits[2]?.webformatURL}
                  alt=""
                />
              ) : null}
            </PlaceCard.Background>
          </PlaceCard>
        ))
      ) : (
        <> Loading</>
      )}
    </PlaceCardWrapper>
  );
};

export default SearchResults;
