import styled from "styled-components";
import { Box } from "../../../../components/lib/Box/styles";

export const FlashBackFlowerWrap = styled(Box)`
  @media (max-width: 800px) {
    & > div {
      min-width: 400px;
      max-width: 400px;
    }
    .first__image {
      top: 140px;
      left: -80px;
    }
    .second__image {
      top: 900px;
      right: -80px;
    }
    .third__image {
      top: 1690px;
      left: -70px;
      transform: rotate(0deg) !important;
    }
    .fourth__image {
      top: 2460px;
      right: -80px;
    }
  }
`;

export const FlashBackFlowerLeft = styled(Box)`
  position: absolute;
  left: ${({ left }) => left || "0"};
  top: ${({ top }) => top || "0"};
  z-index: ${({ zindex }) => zindex || "1"};
  width: ${({ width }) => width || "50%"};
  height: auto;
  img {
    width: 100%;
    height: auto;
    transform: ${({ rotate }) => (rotate ? "rotate(45deg)" : "")};
  }

  @media (max-width: 800px) {
    display: ${({ nomobile }) => (nomobile ? "none" : "flex")};

    .first__image {
      top: 50px !important;
    }
  }
`;

export const FlashBackFlowerRight = styled(Box)`
  position: absolute;
  right: ${({ right }) => right || "0"};
  top: ${({ top }) => top || "0"};
  z-index: ${({ zindex }) => zindex || "1"};
  width: ${({ width }) => width || "50%"};
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transform: ${({ rotate }) =>
      rotate ? "scaleX(-1) rotate(45deg)" : "scaleX(-1) "};
  }

  @media (max-width: 800px) {
    display: ${({ nomobile }) => (nomobile ? "none" : "flex")};
  }
`;
