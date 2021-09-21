import styled from "styled-components";
import { Cards, Chart, CountryPicker } from "..";

const Main = ({ data }) => {
  return (
    <MainWrapper>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.secondaryColor};

  @media (max-width: 767px) {
    height: 100vh;
  }
`;

export default Main;
