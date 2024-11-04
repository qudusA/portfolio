import Header from "./header";
// import GlobalStyle from "../styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const Div = styled.div`
  position: relative;
`;

const P = styled.p`
  position: sticky;
  right: 0;
  top: 150px;
  cursor: pointer;
`;

export default function AppLayout() {
  return (
    <Div>
      {/* <GlobalStyle /> */}
      <P>
        <DarkModeToggle />
      </P>
      <Header />
      <Outlet />
    </Div>
  );
}
