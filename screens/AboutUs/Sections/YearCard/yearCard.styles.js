import styled from "styled-components";
import { Box } from "../../../../components/lib/Box/styles";

export const FlasbbackCardWrapperWeb = styled(Box)`
  background-color: ${({ background }) => background || ""};
  margin-bottom: 60px;
  padding: 50px 0;
  z-index: 3;

  .card__body__wrap {
    flex-wrap: nowrap;
    height: 550px;
    justify-content: space-between;

    .date__section {
      width: 40px;
      height: 100%;
      overflow: hidden;

      .event__startdate,
      .event__enddate {
        font-size: 1.2em;
        white-space: nowrap;
        font-family: "HerokidSemiBoldWide", sans-serif;
        color: var(--blackPrimary);
        writing-mode: vertical-rl;
      }
      svg {
        font-size: 1.4em;
        margin: -7px 10px 0 10px;
        transform: rotate(90deg);
      }
      p {
        margin: -7px 12px 0 12px;
        font-size: 15px;
        opacity: 0.5;
        writing-mode: vertical-rl;
      }
      .event__enddate {
        font-family: "HerokidExtraBoldWide", sans-serif !important;
      }
    }

    .card__content__wrap {
      width: calc(100% - 45px);
      height: 100%;
      flex-wrap: nowrap;
      .card__content__left__section {
        width: 47%;
        z-index: 2;
        min-width: 500px;
        height: 100%;

        .top__section {
          height: 45%;
          flex-direction: column;
          align-items: flex-start;
          padding: 30px;
          flex-wrap: nowrap;
          background-color: var(--blackPrimary);

          .flytime__text {
            font-family: "HerokidLightExpanded", sans-serif;
            color: var(--whitePrimary);
            font-size: 4.2em;
            margin: 0;
            line-height: 1em;
          }
          .event__year {
            color: var(--whitePrimary);
            font-size: 5.2em;
            margin: 20px 0 0 0;
            line-height: 1em;
          }
        }
        .lower__section {
          height: 55%;
          padding: 40px 30px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          background-color: #f0f0e6;

          .description {
            color: var(--blackPrimary);
            max-width: 600px;
            font-size: 1.2em;
            font-family: "HerokidSemiBold", sans-serif;
            @media (max-width: 1000px) {
              font-size: 1em;
            }
          }
          .buttons__wrap {
            flex-direction: column;
            align-items: flex-start;

            .explore__text {
              font-size: 0.9em;
              color: ${({ background }) => background};
              margin-bottom: 15px;
            }

            .buttons__mainwrap {
              max-width: 615px;
              justify-content: flex-start;
              flex-wrap: nowrap;
              button {
                font-family: "HerokidSemiBoldExpanded", sans-serif;
                font-size: 1em;
                margin-right: 20px;
              }
            }
          }
        }
      }
      .card__content__right__section {
        width: 53%;
        z-index: 1;
        overflow: hidden;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right;
        }
      }
    }
  }
  #odd__cards {
    .card__content__wrap {
      .card__content__left__section {
        .top__section {
          background: #f0f0e6;
          .flytime__text {
            color: var(--blackPrimary);
          }
          .event__year {
            color: var(--blackPrimary);
          }
        }
        .lower__section {
          background: var(--blackPrimary);
          .description {
            color: #fff;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FlasbbackCardWrapperMobile = styled(Box)`
  background-color: ${({ background }) => background || ""};
  margin-bottom: 50px;
  width: 97%;
  z-index: 3;

  @media (min-width: 800px) {
    display: none;
  }

  .mobile__date__section {
    height: 50px;
    overflow: hidden;
    overflow: hidden;
    justify-content: flex-start;
    width: 97%;
    flex-wrap: nowrap;
    padding-top: 10px;

    .event__startdate,
    .event__enddate {
      font-size: 1.3em;
      white-space: nowrap;
      font-family: "HerokidSemiBoldWide", sans-serif;
      color: var(--blackPrimary);
    }
    svg {
      font-size: 1.4em;
      margin: -7px 10px 0 10px;
      min-width: 25px;
    }

    p {
      margin: -7px 12px 0 12px;
      font-size: 15px;
      opacity: 0.5;
    }
    .event__enddate {
      font-family: "HerokidExtraBoldWide", sans-serif !important;
    }
  }

  .mobile__card__header {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px;
    background-color: var(--whitePrimary);

    .flytime__text {
      font-family: "HerokidLightExpanded", sans-serif;
      color: var(--blackPrimary);
      font-size: 2.5em;
      margin: 0;
      line-height: 1em;
    }
    .card__header__bottom {
      justify-content: space-between;
      flex-wrap: nowrap;
      align-items: flex-end;
      .event__year {
        color: var(--blackPrimary);
        font-size: 3em;
        margin: 20px 0 0 0;
        line-height: 1em;
      }

      .routes__mainwrap {
        max-width: 300px;
        justify-content: flex-end;
        .route__text {
          text-decoration: underline;
          font-size: 1.2em;
          margin-bottom: 2px;
          margin-left: 15px;
        }
      }
    }
  }

  .mobile__card__body {
    height: 320px;
    justify-content: space-between;
    padding-left: 20px;

    .explore__text {
      font-size: 1.3em;
      color: var(--whitePrimary);
      writing-mode: vertical-rl;
      margin-bottom: 0;
      line-height: 0.7em;
    }
    .card__image__wrap {
      width: calc(100% - 35px);
      z-index: 1;
      overflow: hidden;
      height: 100%;
      padding: 1px 1px 1px 15px;
      background-color: var(--blackPrimary);
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
        z-index: 1;
      }
      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        z-index: 2;
        background-color: #00000099;
      }
    }
  }

  .description__wrap {
    background-color: var(--blackPrimary);
    padding: 20px;
    justify-content: flex-start;
    .description {
      color: var(--whitePrimary);
      width: 97%;
      max-width: 550px;
      font-size: 1.4em;
      font-family: "HerokidSemiBold", sans-serif;
      line-height: 2em;
      @media (max-width: 1000px) {
        font-size: 1em;
      }
    }
  }

  @media (max-width: 600px) {
    .mobile__card__header {
      .flytime__text {
        font-size: 1.7em;
      }
      .card__header__bottom {
        .event__year {
          font-size: 2.5em;
        }
        .routes__mainwrap {
        }
      }
    }
  }

  @media (max-width: 450px) {
    .mobile__card__header {
      .card__header__bottom {
        .routes__mainwrap {
          max-width: 250px;
          .route__text {
            font-size: 1.1em;
          }
        }
      }
    }
  }
  @media (max-width: 390px) {
    .mobile__card__header {
      .card__header__bottom {
        .routes__mainwrap {
          max-width: 210px;
          .route__text {
            font-size: 0.9em;
          }
        }
      }
    }
  }
`;
