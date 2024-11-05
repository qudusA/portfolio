import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  margin-bottom: 100px;
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
  text-transform: uppercase;
  /* margin-bottom: 30px; */
`;

const Name = styled.span`
  padding: 0 5px;
  border-radius: 10px;
  display: inline-block;
  background-color: var(--color-grey-900);
  color: var(--color-grey-100);
  white-space: nowrap;

  &:hover {
    background-color: var(--color-grey-600);
  }

  @media (max-width: 983px) {
    font-size: 15px;
  }
`;

const StackDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;

  @media (max-width: 983px) {
    gap: 4px;
  }
`;

const stackList = [
  "JavaScript",
  "CSS",
  "Sequelize",
  "HTML",
  "Mongoose",
  "React",
  "Next",
  "SpringBoot",
  "Nest",
  "SQL",
  "NoSQL",
  "Java",
  "Docker",
  "Postges",
  "Git",
  "Nx Monorepo",
  "Mocha",
  "TypeScript",
  "Redux",
  "Pug",
  "Handlebars",
  "Ejs",
  "MongoDb",
  "BullMq",
  "Styled Components",
  "Redis",
  "Tailwind",
  "Aws",
];

export default function TechStack() {
  return (
    <Div>
      <div>
        {/* <p>My tech stack</p> */}
        <H4>skills</H4>
      </div>
      <Tech>
        <FaHtml5 size={"80px"} />
        <FaCss3Alt size={"80px"} />
        <IoLogoJavascript size={"80px"} />
        <FaReact size={"80px"} />
        <SiStyledcomponents size={"80px"} />
      </Tech>
      <StackDiv>
        {stackList.map((stack, i) => (
          <Name key={i}>{stack}</Name>
        ))}
      </StackDiv>
    </Div>
  );
}
