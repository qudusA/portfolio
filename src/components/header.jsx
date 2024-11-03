import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Nav = styled.nav`
  /* border: 1px solid black; */
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* gap: 100px; */
  font-size: 20px;
  padding: 10px;
  align-items: center;
  margin-bottom: 100px;
`;

const Div = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  gap: 20px;
  color: var(--color-gray-20);
`;

const P = styled.p`
  text-transform: capitalize;
  cursor: pointer;
`;

// const Contact = styled.div`
//   width: 20%;
//   /* border: 1px solid green; */
//   display: flex;
//   gap: 15px;
//   justify-content: end;
// `;

export default function Header() {
  return (
    <Nav>
      <Logo />
      <Div>
        <P>home</P>
        <P>about</P>
        <P>tech stack</P>
        <P>project</P>
        <P>contact</P>
        <SocialMedia>
          <FaGithub style={{ color: "var(--color-gray-20)" }} />
          <FaTwitter style={{ color: "var(--color-gray-20)" }} />
          <FaLinkedinIn style={{ color: "var(--color-gray-20)" }} />
        </SocialMedia>
      </Div>
    </Nav>
  );
}
