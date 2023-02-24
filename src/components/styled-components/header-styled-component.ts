import styled from "styled-components";
import { DeviceWidth } from "utils/constants";

// styled component of header
export const Heading = styled.h1`
  color: ${props => props.theme.colors.listHoverBg};
  text-align: center;
  margin: 5px 0 30px 0;

  @media only screen and ${DeviceWidth?.m}{
    font-size: 14px;
    margin: 0 0 15px 0;
  }
`;