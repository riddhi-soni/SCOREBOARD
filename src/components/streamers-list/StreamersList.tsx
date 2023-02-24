// import react, dummyImageUrl, animation change component and styled components
import { createRef, memo, useEffect } from "react";
import { dummyImageUrl, isEmpty } from "utils/constants";
import { StreamersTypes } from "utils/globalTypes";
import useSystemInfo from "hooks/useSystemInfo";
import "assets/css/numberanimation.css";
import PositionChangeAnimation from "components/animation/PositionChangeAnimation";
import {
  Img,
  List,
  ListGroup,
  ScoreDiv,
  ScoreText,
  SmallText,
  StreamerInfo,
} from "components/styled-components/score-board-list-styled-component";
import { numberIncrementAnimation } from "utils/numberAnimation";

// Declaring type of props
interface StreamersListProps {
  data: StreamersTypes[];
}

// JSX function starts from here
const StreamersList = (props: StreamersListProps): JSX.Element => {
  // Destructuring of props
  const { data: streamersList } = props;

  // Destructuring required variable from object return by custom hook.
  let { desktopView } = useSystemInfo();

  useEffect(() => {
    if (streamersList?.length > 0) {
      // increment animation of the updated scores
      numberIncrementAnimation();
    }
  }, [streamersList]);

  return (
    <ListGroup>
      <PositionChangeAnimation>
        {streamersList
          ?.sort((a, b) =>
            a.score !== b.score ? b.score - a.score : a.score - b.score
          )
          .map((streamer, index) => (
            <List
              key={streamer?.userID || index}
              id={streamer?.userID}
              ref={createRef()}
            >
              <StreamerInfo id={`i-${index + 1}`}>
                <Img src={streamer.picture || dummyImageUrl} />
                {streamer?.displayName?.length > 23 && !desktopView
                  ? `${streamer?.displayName?.slice(0, 24)}...`
                  : streamer?.displayName}
              </StreamerInfo>
              <ScoreDiv>
                <ScoreText className="score" data-value={streamer?.score} id={`s-${index + 1}`} />
                <SmallText>points</SmallText>
              </ScoreDiv>
            </List>
          ))}
      </PositionChangeAnimation>
    </ListGroup>
  );
};

export default memo(StreamersList);
