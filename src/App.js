import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Cards, Chart, CountryPicker } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Cards />
        <Chart />
        <CountryPicker />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
