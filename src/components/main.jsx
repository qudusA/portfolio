import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.main`
  /* border: 1px solid red; */
  margin-bottom: 50px;
`;

export default function Main({ children }) {
  return <Div>{children}</Div>;
}

Main.propTypes = {
  children: PropTypes.node,
};
