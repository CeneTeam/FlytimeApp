import styled from "styled-components";
import { Box, Section } from "../../components/lib/Box/styles";

export const RoadToFlytimeWrapper = styled(Box)`
  .travel__header__section {
    background-color: var(--bluePrimary);
    padding: 80px 20px;
    position: relative;
    overflow: hidden;
    .header__flowers__web {
      position: absolute;
      top: -50px;
      z-index: 1;

      img {
        width: 120%;
        height: auto;
      }
    }
    .header__flowers__mobile {
      position: absolute;
      bottom: 0;
      z-index: 1;

      img {
        width: 100%;
        height: auto;
      }
      @media (min-width: 950px) {
        display: none;
      }
    }
    .header__innerwrap {
      flex-direction: column;
      z-index: 3;
      .travel__subheader__text {
        font-size: 1.8em;
        color: var(--whitePrimary);
        margin: 0;
      }
      .travel__header__text {
        font-size: 8em;
        color: var(--whitePrimary);
        margin: 20px 0 30px 0;
        line-height: 1.1em;
        text-align: center;
      }
      .header__buttons__wrap {
        justify-content: space-between;
        max-width: 450px;
      }
    }
  }

  @media (max-width: 950px) {
    .travel__header__section {
      .header__flowers__web {
        display: none;
      }
      .header__innerwrap {
        .travel__subheader__text {
          font-size: 1.3em;
        }
        .travel__header__text {
          font-size: 5em;
        }
        .header__buttons__wrap {
          justify-content: space-between;
          max-width: 450px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .travel__header__section {
      padding: 50px 20px;

      .header__innerwrap {
        .travel__subheader__text {
          font-size: 1em;
        }
        .travel__header__text {
          font-size: 4.4em;
        }
        .header__buttons__wrap {
          flex-direction: column;
          button {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
export const TravelFaqWrapper = styled(Section)`
  .travelfaq__body {
    height: calc(100vh - 70px);
    justify-content: space-between;
    position: relative;
    overflow: hidden !important;

    .fest__image {
      width: 150px;
      min-width: 100px;
      height: 100%;
      background-color: #fdbf00;

      img {
        height: 80%;
      }
      .festimage__mobile {
        height: 70%;
        width: 100%;
        @media (min-width: 900px) {
          display: none;
        }
      }
    }

    .travelfaq__textsection {
      position: relative;
      height: 100%;
      width: calc(100% - 190px);
      overflow: hidden;
      background-color: var(--bluePrimary);

      .travelfaqtext__wrap__main {
        height: 100%;
        z-index: 3;
        padding: 0 5%;
        flex-wrap: nowrap;
        justify-content: space-between;
        .text__left {
          max-width: 480px;
          flex-direction: column;
          align-items: flex-start;
          .travelfaq__header {
            color: var(--whitePrimary);
            font-size: 8em;
            line-height: 1em;
            margin: 0;
          }

          .travelfaq__subheader {
            color: var(--whitePrimary);
            font-size: 1.2em;
            line-height: 1.9em;
            margin: 40px 0;
          }
        }
        .text__right {
          max-width: 600px;
          margin-left: 40px;
          #activeFaq {
            background-color: var(--greenPrimary);
          }
          .faqslab {
            padding: 20px 40px;
            background-color: var(--whitePrimary);
            margin-bottom: 20px;
            overflow: hidden;
            flex-wrap: nowrap;
            transition: all 0.3s ease;
            flex-direction: column;
            cursor: pointer;
            position: relative;

            .open__faq {
              position: absolute;
              right: 20px;
              top: 25px;
              svg {
                font-size: 20px;
              }
            }
            .faq__question {
              color: var(--blackPrimary);
              font-size: 1.2em;
              margin: 0;
            }
            .faq__answelist {
              margin-top: 10px;
              align-items: flex-start;
              flex-direction: column;

              .answer__title {
                font-size: 1em;
                width: 100%;
              }
              .answer__text {
                font-size: 1em;
                width: 100%;
                text-align: center;
                a {
                  color: var(--blackPrimary);
                  font-family: "HerokidBold", sans-serif;
                }
              }
            }
          }
        }
      }
      .travelfaq__flower {
        position: absolute;
        bottom: 0;
        z-index: 1;
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
      height: max-content;
      .travelfaq__textsection {
        width: 100%;
        z-index: 9999999;
        padding: 80px 0 100px 0;
        .travelfaqtext__wrap__main {
          flex-direction: column;
          .text__left {
            max-width: 800px;
            flex-direction: column;
            align-items: center;
            .travelfaq__header {
              font-size: 7em;
              text-align: center;
            }

            .travelfaq__subheader {
              text-align: center;
              max-width: 550px;
            }
            button {
              font-size: 13px;
              width: 14em;
              height: 46px;
              svg {
                margin-left: 15px;
              }
            }
          }

          .text__right {
            margin: 60px 0 0 0;

            .faqslab {
              padding: 15px;

              .open__faq {
                top: 17px;
                right: 10px;
              }
              .faq__question {
                color: var(--blackPrimary);
                text-align: center;
                font-size: 1em;
                width: 85%;
              }
              .faq__answelist {
                .answer__title,
                .answer__text {
                  text-align: center;
                  font-size: 0.9em;
                }
              }
            }
          }
        }
      }

      .fest__image {
        width: calc(100% - 30px);
        height: 120px;
        padding: 0 15px;
        .festimage__web {
          display: none;
        }
      }
    }
  }
`;

export const MapSectionWrapper = styled(Section)`
  background-color: var(--blackPrimary);
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
  flex-direction: column;

  .mapsection__flowers__web {
    position: absolute;
    bottom: 0;
    z-index: 1;

    img {
      width: 110%;
      height: auto;
    }
  }

  .mapsection__header {
    color: var(--greenPrimary);
    font-size: 4em;
    font-family: "HerokidBoldUltraCondenced", sans-serif;
    margin: 0;
    line-height: 1.4em;
    text-align: center;
    z-index: 2;
  }

  .mapsection__address__text,
  .mapsection__address__main {
    max-width: 500px;
    color: var(--whitePrimary);
    margin: 0;
    font-size: 1em;
    line-height: 2em;
    text-align: center;
    z-index: 2;
  }

  .mapsection__address__text {
    font-size: 1.5em;
    margin: 15px 0 5px 0;
  }
  .google__map {
    max-width: 1000px;
    z-index: 2;
    margin-top: 40px;

    iframe {
      width: 100%;
      height: 600px;
    }
  }
  @media (max-width: 500px) {
    .google__map {
      iframe {
        height: 500px;
      }
    }
  }
`;
