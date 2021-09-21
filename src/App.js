import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Aside, Main } from "./components";
import { useEffect, useState } from "react";
import { getData } from "./api";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Aside />
        <Main data={data} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;
