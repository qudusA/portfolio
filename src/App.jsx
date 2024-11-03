import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Main from "./components/main";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main>
        <TechStack />
        <Project />
      </Main>
      <Footer />
    </>
  );
}

export default App;
