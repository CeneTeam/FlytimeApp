import styled from "styled-components";
import { Box } from "../Box/styles";

export const DaysWrapper = styled(Box)`
  width: 100%;
  height: 60px;
  overflow: hidden;
  padding-top: 5px;
  justify-content: ${({ noAnimation }) =>
    noAnimation ? "center" : "flex-start"};

  background-color: ${({ backgroundcolor }) =>
    backgroundcolor || "var(--limePrimary)"};

  .dayswrap__inner {
    flex-wrap: nowrap;
    width: ${({ noAnimation }) => (noAnimation ? "98%" : "max-content")};
    justify-content: flex-start;
    overflow-x: ${({ noAnimation }) => noAnimation && "hidden"};

    .day__play {
      width: max-content;
      flex-wrap: nowrap;
      min-width: max-content !important;

      h2,
      h3 {
        font-size: 1.4em;
        white-space: nowrap;
        font-family: "HerokidSemiBoldWide", sans-serif;
        color: var(--blackPrimary);
      }
      svg {
        font-size: 1.4em;
        margin: -7px 10px 0 10px;
      }
      p {
        font-size: 15px;
        opacity: 0.5;
        margin: -7px 12px 0 12px;
      }
      h3 {
        font-family: "HerokidExtraBoldWide", sans-serif !important;
      }
      h4 {
        white-space: nowrap;
        font-family: "HerokidBoldCondensed", sans-serif;
        font-size: 1.2em;

        span {
          font-family: "HerokidRegularCondensed", sans-serif;
        }
      }

      .rhythm {
        font-size: 1.6em;
      }
    }
    animation: ${({ noAnimation }) =>
      noAnimation ? "" : "dayXscroll 30s infinite ease-in-out"};
  }

  @media (min-width: 800px) {
    width: ${({ horizontal }) => (horizontal ? "50px" : "100%")};
    height: ${({ horizontal }) => (horizontal ? "100%" : "60px")};
    justify-content: ${({ horizontal }) => horizontal && "flex-end"};

    .dayswrap__inner {
      flex-direction: ${({ horizontal }) => (horizontal ? "column" : "row")};
      padding-right: ${({ horizontal }) => horizontal && "10px"};

      .day__play {
        flex-direction: ${({ horizontal }) => (horizontal ? "column" : "row")};

        svg {
          transform: ${({ horizontal }) =>
            horizontal ? "rotate(-90deg)" : "0"};
          margin: ${({ horizontal }) =>
            horizontal ? "2px 0 10px 0" : "-7px 10px 0 10px"};
        }
        p {
          margin: ${({ horizontal }) =>
            horizontal ? "0 -3px 10px 0" : "-7px 12px 0 12px"};
        }

        h4,
        p,
        h3,
        h2 {
          writing-mode: ${({ horizontal }) => horizontal && "vertical-rl"};
          transform: ${({ horizontal }) =>
            horizontal && "scaleX(-1) scaleY(-1)"};
        }
      }
      animation: ${({ horizontal, noAnimation }) =>
        horizontal
          ? " dayYscroll 30s infinite ease-in-out"
          : noAnimation
          ? ""
          : " dayXscroll 30s infinite ease-in-out"};
    }
  }

  @keyframes dayXscroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-2000px);
    }
  }
  @keyframes dayYscroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2000px);
    }
  }
`;
