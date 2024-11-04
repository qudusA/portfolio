import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
import { FaGithub, FaLinkedinIn, FaTwitter, FaTimes } from "react-icons/fa";

import { IoGrid } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  gap: 100px;
  font-size: 20px;
  align-items: center;
  /* border: 1px solid black; */
  margin-bottom: 100px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: var(--color-gray-100);

  @media (max-width: 983px) {
    display: none;
  }
  /* width: 60%; */
  /* border: 1px solid red; */
`;

const Grid = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 983px) {
    display: block;
  }
`;

const P = styled.p`
  text-transform: capitalize;
  cursor: pointer;
  white-space: nowrap;
`;

// const Contact = styled.div`
//   width: 20%;
//   /* border: 1px solid green; */
//   display: flex;
//   gap: 15px;
//   justify-content: end;
// `;

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Nav>
      <Logo />
      <Div>
        <P>
          <NavLink to={"/"}>Home</NavLink>
        </P>
        <P>
          <NavLink to={"/about"}>about</NavLink>
        </P>
        <P>
          <NavLink to={"/tech"}>tech stack</NavLink>
        </P>
        <P>
          <NavLink to={"/project"}>project</NavLink>
        </P>
        <P>
          <NavLink to={"/contact"}>contact</NavLink>
        </P>
        <SocialMedia>
          <FaGithub />
          <FaTwitter />
          <FaLinkedinIn />
        </SocialMedia>
      </Div>
      <Grid onClick={() => setIsClicked((clicked) => !clicked)}>
        {isClicked ? <FaTimes /> : <IoGrid />}
      </Grid>
    </Nav>
  );
}
