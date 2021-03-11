import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchPlace } from "../api/axios";
import { useQuery } from "../custom-hooks";
import { Header, SearchResults } from "../styled-compoenents";

const SearchPage = () => {
  const location = useLocation();
  const searchedPlace = useQuery().get("q");
  const searchedData = location.state?.search;
  const [fallbackSearchedData, setFallbackSearchedData] = useState();

  useEffect(() => {
    if (!searchedData) {
      const getData = async () => {
        let searchedResults = await searchPlace(searchedPlace);
        if (searchedResults && searchedResults.data) {
          setFallbackSearchedData(searchedResults.data.results);
        }
      };
      getData();
    }
  }, [searchedPlace]);

  return (
    <div>
      <Header fz="3rem">showing results for "{searchedPlace}" </Header>
      <SearchResults data={searchedData || fallbackSearchedData} />
    </div>
  );
};

export default SearchPage;
