import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Participants from "./components/Participants";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const theme = {
  colors: {
    headerContainer: "#adb5bd",
    headerContent: "#FFFFFF",
    darkGrey: '#757575',
  },
  spacing: {
    headerPadding: 32,
    headerContentSpacing: 16,
    titleLineHeight: 32,
    titleFontSize: 26,
    bodyWidth: 912,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Container>
          <Participants />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
