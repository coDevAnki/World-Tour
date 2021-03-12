import styled from "styled-components";

const PlaceDetailsContainer = styled.div`
  margin-top: 10rem;
`;
const DescriptionContainer = styled.div`
  width: 60vw;
  height: 60vh;
  margin-bottom: 15rem;
  padding-top: 3rem;
  margin-left: 6%;
  min-height: min-content;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ isBgImg }) => (isBgImg ? "cover" : "contain")};
  }
`;
const DescriptionHeaderContainer = styled.div`
  margin-left: 5%;
  margin-bottom: 5px;
  i {
    color: red;
    cursor: pointer;
    transition: 0.1s ease-in-out transform;
    transform: scale(0.9);
    :hover {
      transform: none;
    }
  }
`;
const DescriptionText = styled.p`
  position: absolute;
  top: 15%;
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

export {
  PlaceDetailsContainer,
  DescriptionContainer,
  DescriptionText,
  DescriptionHeaderContainer,
};
