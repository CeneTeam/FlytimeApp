import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const MarketPlaceWrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  .mainwrap__section {
    position: relative;
    .eat__title__wrap {
      width: 100%;
      height: 120px;
      background-color: #f0f0e6;

      .eat__text {
        white-space: nowrap;
        margin: 0;
        color: var(--blackPrimary);
        line-height: 0.7em;
        font-size: 3.5em;
      }
    }

    .body__wrap {
      background-color: var(--yellowSecondary);
      padding: 30px 40px 0 40px;
      position: relative;
      button {
        width: 300px;
        margin: 30px 0 20px 0;
        z-index: 6;
      }
      .marketbody_header__text {
        color: var(--whitePrimary);
        font-size: 11em;
        line-height: 1em;
        margin-bottom: 15px;
      }

      .fly__village {
        width: 90%;
        max-width: 610px;

        img {
          width: 100%;
          height: auto;
        }
      }

      .body__content {
        background-color: var(--blackPrimary);
        padding: 30px;
        flex-direction: column;
        position: relative;

        .bodycontent__header {
          font-size: 3.5em;
          line-height: 1em;
          color: var(--whitePrimary);
          margin-bottom: 15px;
          z-index: 6;

          .eat {
            font-family: "HerokidSemiBoldWide", sans-serif;
          }

          .play {
            font-family: "HerokidBoldUltraCondenced", sans-serif;
          }
        }
        .content__date {
          font-family: "HerokidBoldUltraCondenced", sans-serif;
          color: var(--yellowPrimary);
          font-size: 3.1em;
          z-index: 6;
        }

        .location {
          font-size: 1.1em;
          color: var(--whitePrimary);
          text-align: center;
          line-height: 2.2em;
          z-index: 6;
          max-width: 285px;
        }
        .disclaimer {
          color: var(--whitePrimary);
          text-align: start;
          max-width: 350px;
          text-align: center;
          z-index: 6;
          margin-bottom: 50px;
        }
      }
      .flower__wrap {
        position: absolute;
        width: 40%;
        max-width: 500px;
        background-color: var(--blackPrimary);
        height: 465px;
        overflow: hidden;
        top: 300px;
        z-index: 3;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .left__flower {
        left: 0;
        img {
          object-position: right;
          width: 85%;
          margin-left: -140px;
        }
      }

      .right__flower {
        right: 0;
        img {
          margin-right: -250px;
          object-position: left;
        }
      }

      .everything__fly__section {
        min-height: 560px;
        overflow: hidden;
        background-color: var(--blackPrimary);
        position: relative;
        margin-top: -2px;

        .bgimage {
          width: 100%;
          height: auto;
          object-fit: cover;
          z-index: 1;
          position: absolute;
          min-height: inherit;
        }
        .everything__fly__content {
          z-index: 5;
          background-color: #000000c9;
          min-height: inherit;
          flex-direction: column;
          padding-top: 20px;
          .everythingfly__text {
            font-size: 5em;
            line-height: 1em;
            color: var(--whitePrimary);
            margin-bottom: 30px;
          }
          .everything__text {
            font-family: "HerokidLightExpanded", sans-serif;
            font-size: 3em;
            line-height: 1em;
            color: var(--whiteSecondary);
            margin-bottom: 10px;
          }

          .fly__description {
            font-size: 1.2em;
            color: var(--whiteSecondary);
            width: 90%;
            max-width: 640px;
            text-align: center;
            line-height: 2em;
          }
        }
      }
    }
  }

  @media (min-width: 800px) {
    .mainwrap__section {
      justify-content: flex-end;
      .eat__title__wrap {
        width: 120px;
        height: calc(100vh - 120px);
        position: fixed;
        bottom: 0;
        left: 50px;
        z-index: 5;
        background-color: var(--whitePrimary);

        .eat__text {
          transform: scaleX(-1) scaleY(-1);
          writing-mode: vertical-lr;
          font-size: 6.7em;
        }
      }
      .days__wrap {
        position: fixed;
        bottom: 0;
        left: 0;
        width: max-content;
        height: calc(100vh - 120px);
      }
      .body__wrap {
        width: calc(100% - 170px);
        margin-left: -170px;
      }
    }
  }

  @media (max-width: 800px) {
    .mainwrap__section {
      flex-direction: column;
      align-items: flex-start;

      .days__wrap {
        z-index: 6;
      }
      .body__wrap {
        padding: 30px 0 0 0;
        z-index: 6;
        button {
          width: 100%;
          max-width: 280px;
          margin-bottom: 30px;
        }

        .marketbody_header__text {
          font-size: 7em;
        }

        .fly__village {
          min-height: 160px;
        }
        .body__content {
          overflow-y: hidden;
          z-index: 6;
          background-color: #000000c4;
          padding-top: 40px;

          .bodycontent__header {
            font-size: 3em;
          }

          .content__date {
            font-size: 3.4em;
          }
          .disclaimer {
            margin-bottom: 30px;
          }

          .location {
            line-height: 1.8em;
            font-size: 0.9em;
          }
        }

        .flower__wrap {
          width: 50%;
          max-width: 50%;
          height: 540px;
          top: 190px;

          img {
            width: 90%;
            height: auto;
            object-fit: cover;
            margin-top: -50px;
          }
        }
        .left__flower {
          left: 0;
          justify-content: flex-start;
          align-items: flex-start;
          img {
            margin-left: -70px;
            transform: rotate(45deg);
            min-width: 220px;
          }
        }

        .right__flower {
          right: 0;
          align-items: flex-end;
          img {
            margin-right: -150px;
            width: 140%;
            min-width: 330px;
          }
        }

        .everything__fly__section {
          min-height: 500px;
          width: calc(100% - 5px);
          margin-top: 4px;

          .bgimage {
            min-height: 500px;
          }
          .everything__fly__content {
            min-height: 500px;
            .everythingfly__text {
              font-size: 4em;
            }
            .everything__text {
              font-size: 2.6em;
            }

            .fly__description {
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .mainwrap__section {
      .body__wrap {
        .fly__village {
          min-height: 130px;
          width: 100%;
          overflow: hidden;
        }
        .flower__wrap {
          top: 160px;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .mainwrap__section {
      .body__wrap {
        .fly__village {
          min-height: 120px;
        }
        .flower__wrap {
          top: 150px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .mainwrap__section {
      .eat__title__wrap {
        .eat__text {
          font-size: 3em;
        }
      }
    }
  }
  @media (min-width: 800px) and (max-height: 760px) {
    .mainwrap__section {
      .eat__title__wrap {
        .eat__text {
          font-size: 5.5em;
        }
      }
    }
  }

  @media (min-width: 800px) and (max-height: 660px) {
    .mainwrap__section {
      .eat__title__wrap {
        .eat__text {
          font-size: 4.5em;
        }
      }
    }
  }
`;
