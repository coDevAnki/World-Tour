import styled, { css } from "styled-components";

export default styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  font-size: ${({ fz }) => (fz ? fz : "auto")};
  ${({ hero }) =>
    hero &&
    css`
      background: url("https://res.cloudinary.com/codevanki/image/upload/c_scale,f_webp,h_1016,q_100,w_1350/v1615122749/worldtour/aerial-view-city-coastline-turkey_k0gw6e.webp");
      padding-top: 10rem;
      padding-left: 2rem;
      justify-content: flex-start;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    `}
`;
