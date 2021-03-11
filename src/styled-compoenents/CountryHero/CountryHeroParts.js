import styled from "styled-components";

export const CountryImgBackground = styled.div`
  height: 100vh;
  background: ${({ src }) =>
    `url(${
      src
        ? src
        : "https://pixabay.com/photos/hills-india-nature-kodaikanal-2836301/"
    }) no-repeat;`};
  background-position: center;
  background-size: cover;
  margin-bottom: 5rem;
  padding-top: 10%;
`;
export const CountryInner = styled.div`
  margin-left: 10px;
  width: 40%;
  padding: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;
