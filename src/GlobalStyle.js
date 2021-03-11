import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
font-size:10px;
--clr-bg: #e6e6fa;
--clr-bg-rgb: 230, 230, 250;
--clr-primary:#000080;
--clr-primary-rgb:0, 0, 128;
--clr-white:white;
--clr-secondary:black;
--font-bold:400;
--font-md:300;
--font-light:200;
}

body{
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif;
    background-color:var(--clr-bg);
    font-size:2.3rem;
    position:relative;
}
a{
    text-decoration:none;
    color:black;
}
`;
