import styled from "styled-components";
import { Box } from "../Box/styles";

export const SponsorsWrapper = styled(Box)`
  overflow: hidden;
  padding: 13px 0;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--greenPrimary)"};
  height: 70px;
  justify-content: flex-start;
  flex-wrap: nowrap;

  .sponsor__logo {
    width: 250px;
    min-width: 60px;
    height: 100%;

    margin: 0 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 500px) {
    .lineup__sponsors__wrap {
      padding: 0;
      height: 50px;
    }
  }
`;
