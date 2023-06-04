import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const LineupWrapper = styled(Box)`
  position: relative;
  overflow: hidden;

  .lineup__flowers {
    position: absolute;
    z-index: 1;
    top: 750px;
    img {
      width: 140%;
      height: auto;
      object-fit: cover;
      margin-top: -300px;
      min-height: 500px;
    }
  }
  .lineup__header__section {
    padding: 40px 20px 80px 20px;
    position: relative;
    background-color: var(--greenPrimary);
    overflow: hidden;

    .header__innerwrap {
      position: relative;
      flex-direction: column;

      .tandc__header__text {
        color: #eeefe8;
        margin: 0;
        font-size: 10em;
        line-height: 1em;
        z-index: 2;
      }
      svg {
        position: absolute;
        left: 5%;
        top: -50px;
      }

      .header__year__text {
        color: #eeefe8;
        font-size: 2em;
        line-height: 1em;
      }
    }

    .header__flower {
      position: absolute;
      width: 100%;
      height: auto;
      object-fit: cover;
      z-index: 1;
    }
    .header__flower__web {
      left: 0;
      bottom: 0;
    }
    .header__flower__mobile__left {
      left: -100px;
      top: -50px;
      width: 95%;
      max-width: 500px;

      @media (min-width: 800px) {
        display: none;
      }
    }

    .header__flower__mobile__right {
      right: 0;
      top: 0;
      width: 75%;
      max-width: 500px;

      @media (min-width: 800px) {
        display: none;
      }
    }
  }

  .tab__section {
    flex-direction: column;
    padding: 70px 20px 0 20px;
    position: relative;
    overflow: hidden;

    .mobile__lineup {
      width: max-content;
      flex-direction: column;
      align-items: flex-start;
      height: 75px;
      justify-content: space-between;
      margin-bottom: 30px;
      z-index: 2;

      .mobile__lineup__item {
        width: max-content;
        .card__color {
          width: 15px;
          height: 15px;
          margin-right: 13px;
        }

        .mobile__lineup__title {
          color: var(--whitePrimary);
          font-size: 0.9em;
          line-height: 1em;
          font-family: "HerokidSemiBold", sans-serif;
          margin: 0;
        }
      }

      @media (min-width: 800px) {
        display: none;
      }
    }

    .tab__lineup__wrap {
      z-index: 2;

      .tab__lineup__main {
        padding: 10px;
        border: 1px solid var(--whitePrimary);
        max-width: 870px;
        margin: 0 20px 20px 0;
        flex-wrap: nowrap;

        .tab__lineup__item {
          width: max-content;
          flex-direction: column;
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.3s ease;

          .lineup__tab__date,
          .lineup__tab__activity {
            font-family: "HerokidSemiBold", sans-serif;
            color: var(--whitePrimary);
            font-size: 0.8em;
            margin: 0;
          }
          .lineup__tab__activity {
            font-family: "HerokidBoldWide", sans-serif;
            font-size: 0.9em;
            margin-top: 2px;
          }
        }
      }
      .clear {
        font-family: "HerokidBoldNarrow", sans-serif;
        margin: 0;
        line-height: 1em;
        text-decoration: underline;
        font-size: 1.1em;
        color: var(--whitePrimary);
        cursor: pointer;
      }
    }
  }

  .body__section {
    padding: 50px 0 100px 0;

    .cards__wrap {
      z-index: 2;
      max-width: 1300px;
      justify-content: flex-start;

      .artist__card {
        width: calc(33% - 30px);
        height: 350px;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 15px 30px 15px;

        .artist__image__wrap {
          width: 100%;
          height: calc(100% - 50px);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .artist__name {
          font-family: "HerokidSemiBoldWide", sans-serif;
          color: var(--whitePrimary);
          font-size: 1.2em;
          margin: 0;
          line-height: 1em;
          padding-top: 18px;
        }
      }
    }
  }

  @media (max-width: 950px) {
    .tab__section {
      .tab__lineup__wrap {
        flex-direction: column;
        .tab__lineup__main {
          max-width: 500px;
          margin-right: 0;

          .tab__lineup__item {
            padding: 10px 20px;

            .lineup__tab__date,
            .lineup__tab__activity {
              max-width: 70px;
              text-align: center;
              small {
                display: none;
              }
            }
            .lineup__tab__activity {
              display: none;
            }
          }
        }
        .clear {
          font-size: 1em;
        }
      }
    }

    .body__section {
      .lineup__flowers {
        top: -300px;
      }

      .cards__wrap {
        z-index: 2;
        max-width: 1300px;
        justify-content: space-evenly;

        .artist__card {
          width: calc(50% - 30px);
          height: 320px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .lineup__flowers {
      top: 680px;
    }
    .lineup__header__section {
      padding: 70px 20px;
      .header__innerwrap {
        width: max-content;
        align-items: flex-end;
        .tandc__header__text {
          font-size: 8em;
        }
        svg {
          display: none;
        }
        .header__year__text {
          font-size: 1.7em;
        }
      }

      .header__flower__web {
        display: none;
      }
    }

    .tab__section {
      flex-direction: column;
      padding: 37px 20px 0 20px;
    }
  }

  @media (max-width: 500px) {
    .lineup__flowers {
      top: 370px;

      img {
        min-height: 650px;
        margin-top: -50px;
      }
    }
    .lineup__header__section {
      .header__innerwrap {
        margin-right: 15%;

        .tandc__header__text {
          font-size: 6.5em;
        }

        .header__year__text {
          font-size: 1.4em;
        }
      }
    }

    .tab__section {
      .tab__lineup__wrap {
        .tab__lineup__main {
          max-width: 400px;
          .tab__lineup__item {
            padding: 10px;

            .lineup__tab__date,
            .lineup__tab__activity {
              font-size: 0.65em;
            }
          }
        }
      }
    }
    .body__section {
      .cards__wrap {
        .artist__card {
          width: 90%;
          max-width: 400px;
          height: 300px;
          margin: 0 0 30px 0;
        }
      }
    }
  }
`;
