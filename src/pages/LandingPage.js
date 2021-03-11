import React, { useState } from "react";
import {
  Header,
  Map,
  PopularDestinations,
  RegionSelection,
  SearchBar,
  Wrapper,
} from "../styled-compoenents";

const LandingPage = () => {
  const [hoveredRegion, setHoveredRegion] = useState();

  return (
    <Wrapper direction="column">
      <Wrapper hero>
        <Header hero color="white">
          I'm going on <br /> an adventure!
        </Header>
        <SearchBar />
      </Wrapper>
      <RegionSelection setHoveredRegion={setHoveredRegion} />
      <Map round={true} disableDragging={true} region={hoveredRegion} />
      <PopularDestinations />
    </Wrapper>
  );
};

export default LandingPage;
