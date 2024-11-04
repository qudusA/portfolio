import GlobalStyle from "./styles/GlobalStyle";
// import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import AppLayout from "./components/AppLayout";
import About from "./page/About";
import Project from "./page/Project";
import TechStack from "./page/TechStack";
import { DarkModeProvider } from "./context/DarkModeContext";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate to={"/"} replace />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/tech" element={<TechStack />} />
          </Route>
          <Route element={<PageNotFound />} path="*" />
        </Routes>
        {/* <Header /> */}
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
