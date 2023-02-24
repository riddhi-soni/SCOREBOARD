import styled from "styled-components";
import { DeviceWidth } from "utils/constants";

// styled components of the list page

export const ListGroup = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 15px 20px;

  &:last-child {
    border-bottom: 1px solid transparent;
  }
  
  @media only screen and ${DeviceWidth.m}{
    padding: 8px 15px;
  }
`;

export const StreamerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-variant: small-caps;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.badgeBg};

  @media only screen and ${DeviceWidth.m}{
    font-size: 14px;
    font-weight: 500;
  }
  @media only screen and ${DeviceWidth.xs}{
    font-size: 12px;
    font-weight: 400;
  }
  &#i-1 {
    color: ${props => props.theme.colors.top1BadgeBg};
    text-shadow: 2px 2px 8px ${props => props.theme.colors.top1BadgeBg}
  }
  &#i-2 {
    color: ${props => props.theme.colors.top2BadgeBg};
    text-shadow: 2px 2px 8px ${props => props.theme.colors.top2BadgeBg}
  }
  &#i-3 {
    color: ${props => props.theme.colors.top3BadgeBg};
    text-shadow: 2px 2px 8px ${props => props.theme.colors.top3BadgeBg}
  }
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px;
  border: 3px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  cursor: pointer;

  @media only screen and ${DeviceWidth.m}{
    height: 24px;
    width: 24px;
    margin: 0 8px;
    border-width: 1px;
  }
  @media only screen and ${DeviceWidth.xs}{
    height: 18px;
    width: 18px;
    margin: 0 4px;
    border-width: 1px;
  }  
`;

export const ScoreDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 18px;
  font-weight: 600;

  @media only screen and ${DeviceWidth.m}{
    font-size: 14px;
    font-weight: 500;
  }
  @media only screen and ${DeviceWidth.xs}{
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ScoreText = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.badgeBg};
  &#s-1 {
    color: ${props => props.theme.colors.top1BadgeBg};
    text-shadow: 2px 2px 8px ${props => props.theme.colors.top1BadgeBg}
  }
  &#s-2 {
    color: ${props => props.theme.colors.top2BadgeBg};
    text-shadow: 2px 2px 8px ${props => props.theme.colors.top2BadgeBg}
  }
  &#s-3 {
    color: ${props => props.theme.colors.top3BadgeBg};
    text-shadow: 2px 2px 8px ${props => props.theme.colors.top3BadgeBg}
  }
`;

export const SmallText = styled.small`
  margin-left: 4px;
  color: ${props => props.theme.colors.smallText};

  @media only screen and ${DeviceWidth.m}{
    display: none;
  }
`;