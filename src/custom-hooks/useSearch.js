import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchPlace } from "../api/axios";
import { useDebounce, usePromise, useQuery } from "./index";

const useSearch = () => {
  const [term, setTerm] = useState();
  const [debouncedTerm, setDebouncedTerm] = useDebounce(term, 300);
  const query = useQuery();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    clearInput();
  }, [pathname]);

  const clearInput = () => {
    setTerm("");
    setDebouncedTerm("");
  };

  const { response } = usePromise(
    () => debouncedTerm && searchPlace(debouncedTerm),
    [debouncedTerm]
  );

  const onChange = (e) => {
    setTerm(e.target.value);
  };

  const results = response?.data?.results.filter(
    (suggestion) => suggestion.type === "city" || suggestion.type === "country"
  );

  const goToSearchPage = (e) => {
    history.push(`/search?q=${debouncedTerm}`, { q: results });
  };
  const goToRespectivePage = ({ type, country_id, id }) => {
    let path =
      type === "city"
        ? `/region/${country_id.replaceAll(" ", "_")}/cities/${id.replaceAll(
            " ",
            "_"
          )}`
        : `/region/${id.replaceAll(" ", "_")}`;
    history.push(path);
  };

  return {
    query,
    results,
    onChange,

    debouncedTerm,
    clearInput,
    goToSearchPage,
    goToRespectivePage,
  };
};

export default useSearch;
