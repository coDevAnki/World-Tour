import styled from "styled-components";

export const TopCityTextContainer = styled.div`
  width: 40%;
  margin: 2rem auto;
  i {
    color: red;
    cursor: pointer;
    transition: 0.1s ease-in-out transform;
    :hover {
      transform: scale(1.1);
    }
  }
`;
export const TopCityImgContainer = styled.div`
  margin-top: 20%;
  width: 50%;
  max-width: 600px;
  max-height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
