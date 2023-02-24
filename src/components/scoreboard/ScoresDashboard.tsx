// import react, streamers-data, type of the data and styled component
import { memo, useEffect, useState } from "react";
import streamersData from "assets/data/data.json";
import { StreamersTypes } from "utils/globalTypes";
import { dummyImagesList, isEmpty } from "utils/constants";
import { ScoreBoardContainer } from "components/styled-components/score-board-styled-component";
import StreamersList from "components/streamers-list/StreamersList";

// JSX function starts from here
const ScoresDashboard = () => {
  // Constants
  const updatedList: StreamersTypes[] = []; // to push the randomly updated score streamer with other streamers

  // React state to store streamers data
  const [streamersList, setStreamersList] = useState<StreamersTypes[]>([]);

  // To set streamersList state once JSON file is imported with data
  useEffect(() => {
    if (!isEmpty(streamersData)) {
      // adding the dummy face to all list items
      const updatedData : StreamersTypes[] = streamersData?.map((i:StreamersTypes)=> {
        const face = dummyImagesList[Math.floor(Math.random() * dummyImagesList?.length)]
        return {
          ...i, 
          picture : `https://api.dicebear.com/5.x/fun-emoji/svg?eyes=${face}`
        }
      })
      setStreamersList(updatedData);
    }
  }, [streamersData]);

  // To set streamersList state after each sec with randomly updated score
  useEffect(() => {
    let scoreUpdateTimer: any;

    // Will update score of random number of player at a time and every sec the same.
    if (streamersList.length > 0) {
      scoreUpdateTimer = setTimeout(() => {

        // create the random number for the size of the data list values will change
        const length: number = Math.floor(Math.random() * 10 + 1);

        // creating the random index array with the length size (which streamers data will increase)
        const randomIndexArray: number[] = Array.from({ length }, () =>
          Math.floor(Math.random() * 10)
        );

        // loop the list and update the value of the list
        streamersList?.map((item, index) => {
          item.updated = false;

          // finding the index and increase the value of that streamers
          if (randomIndexArray?.includes(index)) {
            const increaseRandomScore = Math.floor(Math.random() * 4999) + 1;
            item.score = item.score + increaseRandomScore;
          }

          updatedList.push(item);
          return item;
        });

        // Set state with new array
        setStreamersList(updatedList);
      }, 1000);
    }

    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(scoreUpdateTimer);
    };
  }, [streamersList]);

  return (
    <ScoreBoardContainer>
      <StreamersList data={streamersList} />
    </ScoreBoardContainer>
  );
};

export default memo(ScoresDashboard);
