import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkedButton = styled(Link)`
  padding: 0.6em;
  font-size: ${({ size }) =>
    size === "lg"
      ? "3.5rem"
      : size === "md"
      ? "2.5rem"
      : size === "sm"
      ? "1.5rem"
      : "2rem"};
  text-decoration: none;
  color: var(--clr-secondary);
  border: 1px solid var(--clr-primary);
  border-radius: 0.2em;
  background-color: white;
  :hover {
    background-color: lavender;
  }
`;
export default LinkedButton;
