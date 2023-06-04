import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const FlashbackDaysWrapper = styled(Box)`
  .routeswrap__main {
    padding: 40px;
    justify-content: space-between;
    background-color: #fff;
    .route {
      width: max-content;
      cursor: pointer;
      .route__text {
        font-family: "HerokidSemiBoldExpanded", sans-serif;
        font-size: 13px;
      }
      svg {
        margin: -6px 0 0 0;
        font-size: 16px;
      }
    }
    @media screen and (max-width: 1024px) {
      padding: 40px 10px;
      .route {
        .route__text {
          font-size: 11px;
        }
      }
    }
  }
  .fashback__herosection {
    height: calc(100vh - 200px);
    position: relative;
    overflow: hidden;

    .background__image {
      height: 100%;
      position: absolute;
      z-index: 1;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .overlay {
      height: 100%;
      position: absolute;
      z-index: 2;
      background-color: #00000099;
    }
    .herosection__textwrap {
      z-index: 3;
      flex-direction: column;
      position: relative;
      /* height: 100%; */
      margin-top: -30px;
      .flytime__icon {
        position: absolute;
        max-width: 220px;
        width: 20%;
        left: 7%;
        top: 5%;
      }
      .hero__headertext {
        font-size: 10vw;
        color: #fff;
        margin: 0 0 20px 0;
        line-height: 1em;
      }
      .day__text {
        color: #fff;
        font-size: 1.4em;
        margin: 0;
        line-height: 1em;
      }
      .day__activity {
        color: ${({ color }) => color};
        font-size: 5em;
        font-family: "HerokidBoldUltraCondenced", sans-serif;
        margin-bottom: 80px;
      }
      .hero__description {
        font-size: 1.2vw;
        max-width: 50vw;
        width: 85%;
        color: #fff;
        text-align: center;
      }
    }

    @media screen and (max-width: 1024px) {
      height: max-content;
      padding: 50px 0 70px 0;

      .herosection__textwrap {
        margin-top: 0;
        .flytime__icon {
          display: none;
        }
        .hero__headertext {
          font-size: 20vw;
        }
        .day__text {
          font-size: 1.2em;
        }
        .day__activity {
          font-size: 3em;
          margin-bottom: 50px;
        }
        .hero__description {
          font-size: 1em;
          max-width: 85%;
        }
      }
    }
    @media screen and (min-height: 1400px) {
      height: 70vh;
    }
  }
`;

export const HeroFooterCarouselWrapper = styled(Box)`
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

export const HeadlinerWrapper = styled(Box)`
  padding: 30px;
  justify-content: space-between;
  height: calc(100vh - 100px);
  flex-wrap: nowrap;
  gap: 30px;
  animation: show 2s 1 ease-in-out;

  @media screen and (min-height: 1400px) {
    height: 70vh;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .headline__leftwrap {
    min-width: 470px;
    width: 30%;
    padding-top: 20px;
    overflow: hidden;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      align-self: stretch;
    }
  }
  .headline__rightwrap {
    width: 70%;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;

    .right__textswrap {
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }

    .rightsection__header {
      justify-content: space-between;
      width: 95%;
      .headliner__text {
        color: ${({ color }) => color};
        font-size: 2.4em;
        margin: 0;
      }
      .arrows-wrap {
        justify-content: flex-end;
        width: max-content;
        svg {
          margin-left: 20px;
          font-size: 20px;
          color: ${({ color }) => color};
          cursor: pointer;
        }
      }
    }
    .artist__name {
      font-size: 6vw;
      margin: 10px 0;
      line-height: 1em;
      font-family: "HerokidHeavyNarrow", sans-serif;
      color: #fff;
    }
    .description {
      color: #fff;
      margin-top: 20px;
      font-size: 1.2vw;
      width: 90%;
      line-height: 1.7em;
    }

    .mainimage__mobile {
      width: 80%;
      overflow: hidden;
      img {
        height: auto;
        width: 100%;
        object-fit: cover;
        object-position: top;
      }
      @media screen and (min-width: 900px) {
        display: none;
      }
    }
    .footerimages__wrap {
      overflow-x: auto;
      justify-content: flex-start;
      height: 50%;
      padding-top: 30px;
    }
    .footersub__wrap {
      gap: 15px;
      flex-wrap: nowrap;
      justify-content: flex-start;
      min-width: 900px;
      height: 100%;

      .footerimage__main {
        height: 100%;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: top;
        }
      }
    }
    .progress__mobile {
      width: 100%;
      height: 4px;
      margin-top: 20px;
      border: 0.7px solid #fff;

      .progressbar__inner {
        height: 100%;
        background-color: ${({ color }) => color};
      }
      @media screen and (min-width: 900px) {
        display: none;
      }
    }
    .progress__web {
      height: 90%;
      width: 4px;
      margin-bottom: 20px;
      border: 0.7px solid #fff;
      position: absolute;
      right: 0;
      top: 15px;

      .progressbar__inner {
        width: 100%;
        background-color: ${({ color }) => color};
      }
    }
  }

  @media screen and (max-width: 900px) {
    height: max-content;

    .headline__rightwrap {
      width: 100%;

      .artist__name {
        font-size: 12vw;
      }
      .description {
        margin-top: 0;
        font-size: 3vw;
        width: 100%;
        margin-bottom: 40px;
      }

      .footersub__wrap {
        margin-top: 30px;
        min-width: 100%;
      }
      .progress__web {
        display: none;
      }
    }
    .headline__leftwrap {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .headline__rightwrap {
      .footersub__wrap {
        height: 130px;
      }
    }
  }
`;

export const FaveMomentsWrapper = styled(Box)`
  background-color: ${({ color, noThirdSection }) =>
    noThirdSection ? "#000" : color};
  padding-bottom: 30px;

  .headerwrap {
    padding: 50px 20px;
    flex-direction: column;
    .header__text {
      font-family: "HerokidBoldExpanded", sans-serif;
      font-size: 4vw;
      margin: 0 0 30px 0;
      line-height: 1em;
      color: ${({ color, noThirdSection }) =>
        noThirdSection ? color : "#fff"};
      text-align: center;
    }
    .header__description {
      font-size: 1vw;
      line-height: 1.8em;
      max-width: 49%;
      text-align: center;
      color: ${({ noThirdSection }) => (noThirdSection ? "#fff" : "#000")};
    }
  }

  .images__wrap {
    position: relative;
    .boldimages__wrap {
      overflow-x: auto;
      .boldimages__sub__wrap {
        justify-content: flex-start;
        width: max-content;
        justify-content: flex-start;
        flex-wrap: nowrap;
        div {
          width: 33vw;
          height: 500px;
          min-width: 600px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
        }
      }
    }

    .smallimages__wrap {
      position: absolute;
      overflow-x: auto;
      width: 80%;
      justify-content: flex-start;
      bottom: 30px;

      .smallimages__sub__wrap {
        justify-content: flex-start;
        width: max-content;
        justify-content: flex-start;
        flex-wrap: nowrap;
        gap: 20px;
        overflow-y: hidden;

        div {
          width: 150px;
          height: 100px;
          min-width: 150px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
          :hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .headerwrap {
      .header__text {
        font-size: 6vw;
        margin: 0 0 10px 0;
      }
      .header__description {
        font-size: 3vw;
        line-height: 1.5em;
        max-width: 80%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .headerwrap {
      padding: 30px 0;
    }
    .images__wrap {
      .boldimages__wrap {
        .boldimages__sub__wrap {
          div {
            min-width: 80vw;
          }
        }
      }
      .smallimages__wrap {
        position: relative;
        background-color: #000;
        padding: 30px 0 20px 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;

export const GreenroomWrapper = styled(Box)`
  background-color: #000;
  padding-bottom: 30px;

  .headerwrap {
    padding: 70px 20px;
    flex-direction: column;
    .header__text {
      font-family: "HerokidBoldExpanded", sans-serif;
      font-size: 3vw;
      margin: 0 0 30px 0;
      line-height: 1.5em;
      color: ${({ color }) => color};
      text-align: center;
      max-width: 70%;
    }
    .header__description {
      font-size: 1vw;
      line-height: 1.8em;
      max-width: 49%;
      text-align: center;
      color: #fff;
    }
  }

  .images__wrap {
    position: relative;

    .boldimages__wrap {
      overflow-x: auto;
      .boldimages__sub__wrap {
        justify-content: flex-start;
        width: max-content;
        justify-content: flex-start;
        flex-wrap: nowrap;
        div {
          width: 33vw;
          height: 500px;
          min-width: 600px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
        }
      }
    }

    .smallimages__wrap {
      position: absolute;
      overflow-x: auto;
      width: 80%;
      justify-content: flex-start;
      bottom: 30px;

      .smallimages__sub__wrap {
        justify-content: flex-start;
        width: max-content;
        justify-content: flex-start;
        flex-wrap: nowrap;
        gap: 20px;
        overflow-y: hidden;

        div {
          width: 150px;
          height: 100px;
          min-width: 150px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
          :hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .headerwrap {
      .header__text {
        font-size: 1.3em;
        margin: 0 0 10px 0;
        max-width: 80%;
      }
      .header__description {
        font-size: 3vw;
        line-height: 1.5em;
        max-width: 80%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .headerwrap {
      padding: 50px 0;
    }
    .images__wrap {
      .boldimages__wrap {
        .boldimages__sub__wrap {
          div {
            min-width: 80vw;
          }
        }
      }
      .smallimages__wrap {
        position: relative;
        background-color: #000;
        padding: 30px 0 20px 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;
