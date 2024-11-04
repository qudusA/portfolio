import Header from "./header";
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
      <P>
        <DarkModeToggle />
      </P>
      <Header />
      <Outlet />
    </Div>
  );
}
