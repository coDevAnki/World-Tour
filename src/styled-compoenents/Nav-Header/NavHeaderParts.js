import styled from "styled-components";

export const NavHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: flex-end;
  width: 100%;
  background-color: transparent;
  margin-top: 1rem;
  border-left: 5px solid rgba(0, 0, 185, 0.2);
  border-right: 5px solid rgba(0, 0, 185, 0.2);
  padding: 0.2em 1rem;
`;
export const NavTitle = styled.header`
  position: relative;
  color: var(--clr-primary);
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2rem;
`;
export const NavListItem = styled.li`
  margin-right: 2rem;
  list-style-type: none;
  position: relative;
  transition: 0.2s ease opacity;
  :hover {
    opacity: 0.7;
  }

  label {
    width: 200px;
    box-sizing: border-box;
    cursor: pointer;
    /* position: absolute; */
    /* left: 50px; */
    /* z-index: -1; */
    span {
      padding-left: 1rem;
    }
  }
  input {
    width: 200px;
    opacity: 0;
    padding: 0rem 2rem;
    &:focus {
      opacity: 1;
    }
  }
`;
