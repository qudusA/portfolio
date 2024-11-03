import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  width: 373px;
  height: 467px;
  background-color: #fff;
  box-shadow: 0 0 4px black;
  border-radius: 20px;
  /* border: 1px solid red; */
`;

export default function ProjectCard({ children }) {
  return <Div>{children}</Div>;
}

ProjectCard.propTypes = {
  children: PropTypes.node,
};
