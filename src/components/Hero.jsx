import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 100px;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  margin: 100px 0;
`;

const Image = styled.div``;

export default function Hero() {
  return (
    <Div>
      <p>
        Hi👋, <br /> my name is FATIMAH DAMILOLA OYESANMI <br />A passionate
        Software Developer, I&apos;m a vibrant and articulate problem-solver
        with experience in writing well-designed, tested, and efficient code for
        the development of frontend applications utilizing JavaScript and
        TypeScript, I thrive in solving complex problems and pushing the
        boundaries of what&apos;s possible on the web
      </p>
      <Image>
        <img src="Headshot.jpg" alt="fatimah image" width={"300px"} />
      </Image>
    </Div>
  );
}
