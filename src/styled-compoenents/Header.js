import styled from "styled-components";

const Header = styled.header`
  font-size: ${({ fz }) => (fz ? fz : "5rem")};
  color: ${({ color }) => (color ? color : "var(--clr-primary)")};
  margin: 0.5rem 0;
  text-shadow: ${({ hero }) => (hero ? "1px 3px 5px grey" : "")};
  span {
    font-size: 3rem;
    margin: 0 1em;
  }
`;

export default Header;
