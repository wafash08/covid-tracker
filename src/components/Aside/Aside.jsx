import styled from "styled-components";
import { Menu } from "..";

const Aside = () => {
  return (
    <AsideWrapper>
      <Menu />
    </AsideWrapper>
  );
};

const AsideWrapper = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 767px) {
    top: unset;
    bottom: 0;
    width: 100vw;
    height: 60px;
  }
`;

export default Aside;
