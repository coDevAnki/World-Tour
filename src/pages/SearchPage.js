import React, { useEffect } from "react";
import { searchPlace } from "../api/axios";
import { usePromise, useQuery } from "../custom-hooks";
import { FallBack, Header, SearchResults } from "../styled-compoenents";

const SearchPage = () => {
  const searchedPlace = useQuery().get("q");
  const { loading, response, error } = usePromise(
    () => searchPlace(searchedPlace),
    [searchedPlace]
  );

  const searchedData = response?.data?.results.filter(
    (suggestion) => suggestion.type === "city" || suggestion.type === "country"
  );
  useEffect(() => {
    console.log(loading, response, searchedData);
  }, [response]);

  if (loading) return <FallBack />;
  return (
    <>
      <Header fz="3rem">showing results for "{searchedPlace}" </Header>
      <SearchResults data={searchedData} />
    </>
  );
};

export default SearchPage;
