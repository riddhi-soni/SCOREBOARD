import styled from "styled-components";
import { DeviceWidth } from "utils/constants";

// styled component of the score board container
export const ScoreBoardContainer = styled.div`
  border-radius: 14px;
  background-color: ${(props) => props.theme.colors.listBg};
  max-width: 80%;
  margin: 0 auto;

  @media only screen and ${DeviceWidth.m} {
    max-width: 100%;
  }
`;