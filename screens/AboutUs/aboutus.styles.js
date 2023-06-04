import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const AboutUsWrapper = styled(Box)`
  background-color: #f0f0e6;
  overflow: hidden;

  .about__hero__section {
    flex-direction: column;

    .about__hero__header {
      padding: 50px;
      justify-content: space-evenly;
      max-width: 1700px;
      position: relative;
      overflow: hidden;

      .fluterwave__icon__wrap {
        width: 20%;
        max-width: 300px;
        svg {
          width: 100%;
          height: auto;
        }
      }

      .about__hero__header__textwrap {
        width: 60%;
        flex-wrap: nowrap;
        justify-content: flex-start;
        .about__hero__header__textmain {
          flex-direction: column;
          align-items: flex-start;
          width: max-content;
          .about__hero__header__text {
            font-size: 12em;
            line-height: 1em;
            margin: 0;
            color: var(--blackPrimary);
            position: relative;
            white-space: nowrap;
          }
          .about__hero__header__subtext {
            margin: 0;
            font-size: 1.15em;
            color: var(--blackPrimary);
            white-space: nowrap;
          }
        }

        .flytime__icon__wrap {
          max-width: 200px;
          width: 10%;
          min-width: 100px;
          margin-left: 10%;

          svg {
            width: 100%;
            height: auto;
          }
          @media (min-width: 800px) {
            display: none;
          }
        }
      }
      .hero__header__mobile__flower {
        position: absolute;
        height: 120px;
        overflow: hidden !important;
        top: 81%;
        img {
          width: 110%;
          height: auto;
        }

        @media (min-width: 800px) {
          display: none;
        }
      }

      @media (max-width: 1280px) {
        .fluterwave__icon__wrap {
          width: 21%;
        }
      }

      @media (max-width: 1000px) {
        padding: 50px 20px;
        .about__hero__header__textwrap {
          .about__hero__header__textmain {
            .about__hero__header__text {
              font-size: 8em;
            }
          }
        }
      }

      @media (max-width: 800px) {
        justify-content: center;
        padding: 90px 0;
        .fluterwave__icon__wrap {
          display: none;
        }
        .about__hero__header__textwrap {
          align-items: center;
          position: relative;
          width: max-content;

          .flytime__icon__wrap {
            position: absolute;
            right: -80px;
            top: -60px;
          }

          .about__hero__header__textmain {
            max-width: 270px;
            align-items: center;

            .about__hero__header__text {
              text-align: center;
              font-size: 6em;
              white-space: normal;
            }
            .about__hero__header__subtext {
              margin-top: 10px;
              font-size: 0.9em;
            }
          }
        }
      }
      @media (max-width: 500px) {
        padding-top: 75px;

        .about__hero__header__textwrap {
          .flytime__icon__wrap {
            min-width: 70px;
            top: -40px;
            right: -50px;
          }
        }
        .hero__header__mobile__flower {
          height: 70px;
        }
      }

      @media (max-width: 390px) {
        .about__hero__header__textwrap {
          .flytime__icon__wrap {
            min-width: 50px;
            right: -20px;
          }
          .about__hero__header__textmain {
            max-width: 210px;

            .about__hero__header__text {
              font-size: 4em;
            }
            .about__hero__header__subtext {
              font-size: 0.6em;
            }
          }
        }
      }
    }

    .about__hero__body {
      background-color: var(--blackPrimary);
      position: relative;
      overflow: hidden;
      .hero__body__content {
        z-index: 3;
        padding: 50px;
        flex-direction: column;

        .swipe__text {
          color: var(--whiteSecondary);
          font-size: 1.2em;
          margin: 0;
          @media (min-width: 800px) {
            display: none;
          }
        }

        .about__hero__carousel {
          padding: 50px 0;
          overflow-x: auto;

          .about__cardwrap__sub {
            width: max-content;
            justify-content: flex-start;
            flex-wrap: nowrap;

            .about__hero__card {
              width: 400px;
              min-width: 400px;
              height: 530px;
              flex-wrap: nowrap;
              flex-direction: column;
              justify-content: flex-start;

              .card__image {
                width: 100%;
                height: calc(100% - 60px);

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              .card__route__text {
                font-family: "HerokidBoldWide", sans-serif;
                color: var(--whitePrimary);
                font-size: 1.4em;
                padding-top: 15px;
                cursor: pointer;
              }
            }
          }
        }
      }

      .flower__wrap__web {
        position: absolute;
        bottom: 60px;
        z-index: 1;
        img {
          width: 100%;
        }
      }
      .flower__wrap__mobile {
        position: absolute;
        top: 0;
        z-index: 1;
        flex-wrap: nowrap;
        left: 0;
        justify-content: space-between;
        overflow: hidden;
        img {
          width: 35%;
        }

        .card__mobile__flower__left {
          margin-left: -70px;
        }

        .card__mobile__flower__right {
          margin-right: -70px;
          transform: rotate(180deg);
        }
        @media (min-width: 800px) {
          display: none;
        }
      }

      @media (max-width: 800px) {
        .hero__body__content {
          background-color: #000000c4;
          padding: 50px 30px 0 30px;
          .about__hero__carousel {
            padding-bottom: 30px;
          }
        }
        .flower__wrap__web {
          display: none;
        }
      }

      @media (max-width: 450px) {
        .flower__wrap__mobile {
          img {
            width: 60%;
          }
        }
        .hero__body__content {
          .about__hero__carousel {
            padding-bottom: 30px;
            .about__cardwrap__sub {
              width: 100%;
              .about__hero__card {
                width: 100%;
                min-width: 100%;
                height: 450px;

                .card__image {
                  width: 100%;
                  height: calc(100% - 50px);

                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
                .card__route__text {
                  font-size: 1em;
                }
              }
            }
          }
        }
      }
    }
  }

  .totheworld__wrap {
    @media (min-width: 800px) {
      display: none;
    }
  }

  .flashback__section {
    padding: 50px 0;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .flashback__header__text {
      font-size: 12em;
      line-height: 1em;
      margin: 0;
      color: var(--blackPrimary);
      position: relative;
    }

    .flashback__header__subtext {
      margin: 10px 0 40px 0;
      font-size: 1.6em;
      color: var(--blackPrimary);
      white-space: nowrap;
    }

    @media (max-width: 800px) {
      .flashback__header__text {
        font-size: 7em;
        width: 90%;
        text-align: center;
      }
      .flashback__header__subtext {
        font-size: 1em;
        width: 90%;
        text-align: center;
      }
    }

    @media (max-width: 470px) {
      .flashback__header__text {
        font-size: 6.5em;
      }
      .flashback__header__subtext {
        font-size: 0.9em;
        margin-bottom: 50px;
      }
    }
  }
`;

export const ProgressBarWrapper = styled(Box)`
  width: 100%;
  height: 7px;
  margin: 0 0 50px 0;
  border: 1px solid var(--whiteSecondary);
  position: relative;
  max-width: 1200px !important;

  .progressbar__inner {
    height: 7px;
    background-color: var(--bluePrimary);
    position: absolute;
    top: -1px;
    left: -1px;
    transition: width 0.3s ease;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
