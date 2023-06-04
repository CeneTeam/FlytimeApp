import styled from "styled-components";
import { Box } from "../Box/styles";

export const ToTheWorldWrapper = styled(Box)`
  width: ${({ horizontal }) => (horizontal ? "100%" : "40px")};
  height: ${({ horizontal }) => (horizontal ? "40px" : "100%")};
  overflow: hidden;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--limePrimary)"};
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  flex-wrap: nowrap;
  justify-content: flex-start;

  .worldwrap__inner {
    flex-wrap: nowrap;
    width: max-content;
    justify-content: flex-start;
    flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
    animation: ${({ horizontal }) =>
      horizontal
        ? " Xscroll 30s infinite ease-in-out"
        : " Yscroll 30s infinite ease-in-out"};

    & > div {
      flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
      flex-wrap: nowrap;
    }

    img {
      height: 50px;
      transform: ${({ horizontal }) => (horizontal ? "rotate(-90deg)" : "0")};
    }

    p {
      white-space: nowrap;
      transform: ${({ horizontal }) =>
        horizontal ? "rotate(0deg)" : "rotate(-90deg)"};
      font-size: 0.9em;
      margin: ${({ horizontal }) =>
        horizontal ? "0 45px 0 30px" : "130px 0 100px 0"};
    }
  }

  @keyframes Xscroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-2000px);
    }
  }
  @keyframes Yscroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2000px);
    }
  }

  @media (max-width: 900px) {
    position: ${({ absoluteMobile }) =>
      absoluteMobile ? "absolute" : "relative"};
    right: 0;
    z-index: 1;
    width: ${({ horizontal }) => (horizontal ? "100%" : "30px")};
  }

  @media (min-width: 800px) {
    display: ${({ noweb }) => (noweb ? "none" : "flex")};
  }
`;
