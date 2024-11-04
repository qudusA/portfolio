import Header from "./header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const Div = styled.div`
  position: relative;
`;

const P = styled.p`
  position: fixed;
  right: 10px;
  top: 150px;
  cursor: pointer;
  border: 2px solid var(--color-grey-800);
  border-radius: 3px;
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
