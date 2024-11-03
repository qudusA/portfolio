import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  flex: 1;
`;

const Span = styled.span`
  margin-bottom: 50px;
  display: inline-block;
`;

export default function Project() {
  return (
    <Container>
      <p>Projects</p>
      <Span>i have don this</Span>
      <Div>
        <ProjectCard>
          <img src="project1.svg" alt="proj 1" />
        </ProjectCard>
        <ProjectCard>
          <img src="project2.svg" alt="proj 2" />
        </ProjectCard>
        <ProjectCard>
          <img src="project3.svg" alt="proj 3" />
        </ProjectCard>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Div>
    </Container>
  );
}
