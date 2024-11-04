import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  /* min-height: 100vh; */
  /* border: 1px solid red; */
`;
const Tech = styled.p`
  display: flex;
  justify-content: center;
  gap: 40px;

  flex: 1;
  flex-wrap: wrap;
`;

const H4 = styled.h4`
  /* margin-bottom: 30px; */
`;

export default function TechStack() {
  return (
    <Div>
      <div>
        <p>My tech stack</p>
        <H4>my technologies</H4>
      </div>
      <Tech>
        <FaHtml5 style={{ color: "var(--color-pink-200)" }} size={"80px"} />
        <FaCss3Alt style={{ color: "var(--color-blue-200)" }} size={"80px"} />
        <IoLogoJavascript
          style={{ color: "var(--color-yellow-200)" }}
          size={"80px"}
        />
        <FaReact style={{ color: "var(--color-blue-200)" }} size={"80px"} />
        <SiStyledcomponents
          style={{ color: "var(--color-yellow-200)" }}
          size={"80px"}
        />
      </Tech>
    </Div>
  );
}
