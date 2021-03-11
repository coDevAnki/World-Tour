import React from "react";
import { Wrapper } from "../../styled-compoenents";
import { Letter } from "./Letter";
const LETTERS = (() => {
  let arr = [];
  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
})();

const FilterByLetter = ({ letter, setLetter }) => {
  return (
    <Wrapper fz="1.8rem" justify="flex-end">
      filter by letters-
      {LETTERS.map((ltr, index) => (
        <Letter
          key={`filter_by_letter-${index}`}
          color={letter === ltr && "red"}
          onClick={() => {
            setLetter(ltr);
          }}
        >
          {ltr}
        </Letter>
      ))}
      |
      <Letter
        last
        color={!letter && "red"}
        onClick={() => {
          setLetter("");
        }}
      >
        all
      </Letter>
    </Wrapper>
  );
};

export default FilterByLetter;
