import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Participants from "./components/Participants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const theme = {
  colors: {
    headerContainer: "#adb5bd",
    headerContent: "#FFFFFF",
    darkGrey: "#757575",
    grey: "#eeeeee",
    participantsContent: "#fffff",
    listItemIconColor: "#909090",
  },
  spacing: {
    headerPadding: 32,
    headerContentSpacing: 16,
    titleLineHeight: 32,
    titleFontSize: 26,
    bodyWidth: 912,
    editableLinePadding: 16,
    listItemIconSize: 24,
    emailWidth: 250,
    phoneWidth: 200,
    nameWidth: 200,
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
