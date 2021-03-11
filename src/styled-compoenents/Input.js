import styled from "styled-components";
const InputContainer = styled.input`
  background-color: ${({ partOf }) =>
    partOf === "nav" ? "transparent" : "var(--clr-bg)"};
  color: ${({ partOf }) => (partOf === "nav" ? "transparent" : "")};
  border: none;
  outline: none;
  font-size: ${({ partOf }) => (partOf === "nav" ? "2rem" : "2.5rem")};
  border-radius: 5px;
  padding: 1rem 2rem;
  width: 100%;
  ::placeholder {
    font-weight: var(--font-light);
  }
  :active,
  :focus {
    background-color: white;
    color: black;
  }
`;

const InputButton = styled.button`
  border: none;
  background-color: white;
  position: absolute;
  font-size: ${({ partOf }) => (partOf === "nav" ? "1.5rem" : "2.5rem")};
  padding: 0.5rem;
  z-index: 10;
  top: 3px;
  right: -20px;
  cursor: pointer;
`;

const Input = ({ onSubmit, onChange, placeholder, button, partOf }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputContainer
        id={partOf === "nav" ? "nav-search" : ""}
        partOf={partOf}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
      {button ? (
        <InputButton onClick={onSubmit} type="submit" partOf={partOf}>
          <i
            style={{
              color: "skyblue",
              fontSize: partOf === "nav" ? "1.5rem" : "2.5rem",
            }}
            className="fas fa-plane"
          ></i>
        </InputButton>
      ) : null}
    </form>
  );
};

export default Input;
