import styled from "styled-components";

const ProfLogo = styled.h1`
  color: linear-gradient(to left top, blue, red);
  /* background: linear-gradient(to left top, blue, red); */
  display: flex;
  gap: 4px;
  font-size: 20px;
  white-space: nowrap;
`;

export default function Logo() {
  return <ProfLogo> DAMILOLA OYESANMI </ProfLogo>;
}
