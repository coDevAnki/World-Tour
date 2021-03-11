import styled from "styled-components";
import noImage from "../../assets/no_image-600x490-removebg-preview_cropped.png";
const DescriptionContainer = styled.div`
  width: 60vw;
  height: 60vh;
  background: ${({ bgsrc, loadingImage }) =>
    bgsrc
      ? `url("${bgsrc}")`
      : loadingImage
      ? ""
      : `var(--clr-bg) url(${noImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ bgsrc }) => (bgsrc ? "cover" : "contain")};
  margin-left: 10%;
  margin-bottom: 15rem;
  padding-top: 3rem;
  min-height: min-content;
`;
const DescriptionHeaderContainer = styled.div`
  margin-left: 10%;
  margin-bottom: 5px;
`;
const DescriptionText = styled.p`
  width: 70%;
  margin-left: 70%;
  padding: 2em 1em;
  color: white;
  font-size: 2rem;
  background: linear-gradient(
    to right,
    rgba(0, 0, 50.2, 0.5),
    rgba(0, 0, 50.2, 1)
  );
`;

export { DescriptionContainer, DescriptionText, DescriptionHeaderContainer };
