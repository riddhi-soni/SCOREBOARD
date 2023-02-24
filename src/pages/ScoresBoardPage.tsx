import ScoresDashboard from "components/scoreboard/ScoresDashboard";
import { Heading } from "components/styled-components/header-styled-component";
import { memo, useMemo } from "react";

// main score page 
const ScoresBoardPage = (): JSX.Element => {

  // define the board name at very first time when component render after that it's not re-render
  const headerName = useMemo(() => "Streamers Score Board",[])

  return (
    <>
      <Heading>{headerName}</Heading>
      <ScoresDashboard />
    </>
  );
};

// wrap component with react memo for prevent the re-render
export default memo(ScoresBoardPage);
