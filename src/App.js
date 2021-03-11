import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  CountryPage,
  LandingPage,
  PlaceDetailsPage,
  RegionPage,
  SearchPage,
  TopCitiesPage,
} from "./pages";
import { Breadcrumb, NavHeader } from "./styled-compoenents";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route path="/search" render={() => <SearchPage />} />
        <Route
          exact
          path="/:region/:country/:typeOfplace"
          render={() => (
            <>
              <Breadcrumb />
              <TopCitiesPage />
            </>
          )}
        />
        <Route
          exact
          path="/:region/:country/:typeOfplace/:placeName"
          render={() => (
            <>
              <Breadcrumb />
              <PlaceDetailsPage />
            </>
          )}
        />
        <Route
          exact
          path="/:region/:country"
          render={() => (
            <>
              <Breadcrumb />
              <CountryPage />
            </>
          )}
        />
        <Route
          exact
          path="/:region"
          render={() => (
            <>
              <Breadcrumb />
              <RegionPage />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
