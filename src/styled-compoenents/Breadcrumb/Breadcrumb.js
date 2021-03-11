import React, { createRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export const BreadcrumbItem = styled(Link).attrs(({ to }) => ({ to: to }))`
  text-decoration: none;
  font-size: 2.3rem;
  margin-left: 0.4em;
  color: ${({ selected }) => (selected ? `darkviolet` : `var(--clr-primary)`)};
  &::before {
    content: " > ";
    color: var(--clr-primary);
  }
`;
const BreadcrumbContainer = styled.div`
  margin-right: auto;
  background-color: transparent;
`;
const currentPathRef = createRef();

export const BreadcrumbWrapper = ({ children, history }) => {
  if (!Array.isArray(children)) return children;
  return children.map((Child, index) =>
    React.cloneElement(Child, {
      index,
      selected: index === children.length - 1,
    })
  );
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const params = useParams();
  useEffect(() => {
    currentPathRef.current = pathname;
  }, [pathname]);

  if (params.region === "region") return null;

  const extracedPath = (paramValue, index) => {
    if (currentPathRef.current) {
      let pathArr = currentPathRef?.current?.split("/");
      let path1 = pathArr.slice(0, pathArr.indexOf(paramValue) + 1).join("/");
      let path2 = pathArr.slice(0, index + 2).join("/");
      return path1 || path2;
    }
    return pathname;
  };

  return (
    <BreadcrumbContainer>
      <BreadcrumbWrapper>
        {Object.values(params).map((paramValue, index) => (
          <BreadcrumbItem
            key={`breadcrumb-${index}`}
            to={extracedPath(paramValue, index)}
          >
            {paramValue.replaceAll("_", " ")}
          </BreadcrumbItem>
        ))}
      </BreadcrumbWrapper>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
