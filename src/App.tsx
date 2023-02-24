// import score board page, global styled compoent theme and color file
import ScoresBoardPage from "pages/ScoresBoardPage";
import { ThemeProvider } from "styled-components";
import { GlobalColors } from "utils/constants";
import "./styles.css";

// Main app component
const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={{ colors: GlobalColors }}>
      <ScoresBoardPage />
    </ThemeProvider>
  );
};

export default App;
