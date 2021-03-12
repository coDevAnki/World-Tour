import React, { useMemo } from "react";
import styled from "styled-components";

const HeroImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 120vh;
  img {
    object-fit: cover;
    width: 100%;
    height: 80%;
  }
`;
const HeroImage = ({ imgSrc, alt, children, fixed }) => {
  const src = useMemo(() => imgSrc, []);

  return (
    <HeroImageContainer
      style={{
        background: `fixed center / cover url("${src}"), linear-gradient(to right, #003973, #e5e5be), #1b8cfe`,
      }}
    >
      {/* <img src={src} alt={alt} /> */}
      {children}
    </HeroImageContainer>
  );
};

HeroImage.Content = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : 0)};
  left: ${({ left }) => (left ? left : 0)};
`;
export default HeroImage;
