import styled from "styled-components";
import PropTypes from "prop-types";

const Contact = styled.div`
  width: 20%;
  /* border: 1px solid green; */
  display: flex;
  gap: 15px;
  justify-content: end;
  cursor: pointer;
`;

export default function SocialMedia({ children }) {
  return (
    <Contact>
      {children}
      {/* <FaGithub style={{ color: "var(--color-gray-20)" }} />
      <FaTwitter style={{ color: "var(--color-gray-20)" }} />
      <FaLinkedinIn style={{ color: "var(--color-gray-20)" }} /> */}
    </Contact>
  );
}

SocialMedia.propTypes = {
  children: PropTypes.node,
};
