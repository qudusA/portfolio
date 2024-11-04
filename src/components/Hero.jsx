import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 60px);
  justify-content: center;
  gap: 50px;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  /* flex-wrap: wrap; */
  /* flex: 1; */
  /* margin: 100px 0; */
  /* border: 1px solid red; */
`;
const P = styled.p`
  max-width: 50%;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  border-radius: 5px;
  box-shadow: var(--shadow-lg);
`;

export default function Hero() {
  return (
    <Div>
      <P>
        Hi👋, <br /> my name is FATIMAH DAMILOLA OYESANMI <br />A passionate
        Software Developer, I&apos;m a vibrant and articulate problem-solver
        with experience in writing well-designed, tested, and efficient code for
        the development of frontend applications utilizing JavaScript and
        TypeScript, I thrive in solving complex problems and pushing the
        boundaries of what&apos;s possible on the web
      </P>
      <ImageContainer>
        <Image src="Headshot.jpg" alt="fatimah image" width={"300px"} />
      </ImageContainer>
    </Div>
  );
}
