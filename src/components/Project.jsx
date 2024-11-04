import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { PiLinkSimpleBreakBold } from "react-icons/pi";

const Container = styled.div`
  text-align: center;
  margin-bottom: 100px;
  display: grid;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  flex: 1;
  font-size: 18px;
`;

const Span = styled.span`
  display: inline-block;
`;

const Div = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
`;

const DesCont = styled.div`
  display: grid;
  gap: 10px;
  color: var(--color-gray-30);
`;

const Title = styled.p`
  font-weight: 700;
`;

const LinkContainer = styled.p`
  display: flex;
  justify-content: space-between;
`;

const ATag = styled.a`
  display: flex;
  gap: 10px;
  /* justify-content: center; */
  align-items: center;
`;

const Arr = [
  {
    img: "project1.svg",
    id: 1,
    title: "Kuda clone",
    stack: "javaScript, css, html, react",
    gitHubLink: "",
    liveCodePrev: "",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti dolores magnam cupiditate tempora. Pariatur quae vel nesciunt maxime! Natus hic impedit velit quos facilis in, itaque iure. Nihil, repellendus.",
  },
  {
    img: "project2.svg",
    id: 2,
    title: "Kuda clone",
    stack: "javaScript, css, html, react",
    gitHubLink: "",
    liveCodePrev: "",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti dolores magnam cupiditate tempora. Pariatur quae vel nesciunt maxime! Natus hic impedit velit quos facilis in, itaque iure. Nihil, repellendus.",
  },
  {
    img: "project3.svg",
    id: 3,
    title: "Kuda clone",
    stack: "javaScript, css, html, react",
    gitHubLink: "",
    liveCodePrev: "",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti dolores magnam cupiditate tempora. Pariatur quae vel nesciunt maxime! Natus hic impedit velit quos facilis in, itaque iure. Nihil, repellendus.",
  },
];

export default function Project() {
  return (
    <Container>
      <div>
        <p>Projects</p>
        <Span>Things i have done so far</Span>
      </div>
      <List>
        {Arr.map((card) => (
          <ProjectCard key={card.id}>
            <img src={card.img} alt="proj 1" />
            <Div>
              <Title>{card.title}</Title>
              <DesCont>
                <p>{card.description}</p>
                <span>Tech stack: {card.stack}</span>
              </DesCont>
              <LinkContainer>
                <ATag href={card.liveCodePrev}>
                  <PiLinkSimpleBreakBold />
                  live code
                </ATag>
                <ATag href={card.gitHubLink}>
                  <FaGithub /> github
                </ATag>
              </LinkContainer>
            </Div>
          </ProjectCard>
        ))}

        {/* <ProjectCard>
          <img src="project2.svg" alt="proj 2" />
        </ProjectCard>
        <ProjectCard>
          <img src="project3.svg" alt="proj 3" />
        </ProjectCard>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </List>
    </Container>
  );
}
