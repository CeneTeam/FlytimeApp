import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const FAQWrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  background-color: #f0f0e6;

  .faq__flowers {
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
  .faq__header__section {
    padding: 110px 20px;
    position: relative;
    background-color: var(--blackPrimary);
    overflow: hidden;

    .header__innerwrap {
      position: relative;
      flex-direction: column;
      z-index: 2;

      .header__text {
        color: #eeefe8;
        margin: 0;
        font-size: 10em;
        line-height: 1em;
        z-index: 2;
      }
      svg {
        position: absolute;
        left: 5%;
        top: -100px;
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
      bottom: -40px;
      z-index: 1;
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
    z-index: 5;

    .tab__faq__main {
      padding: 10px;
      border: 1px solid #777;
      max-width: 620px;
      margin-right: 15px 20px;
      flex-wrap: nowrap;
      justify-content: space-between;

      .tab__faq__item {
        width: max-content;
        flex-direction: column;
        padding: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

        .faq__tab__text {
          font-family: "HerokidBoldWide", sans-serif;
          font-size: 0.9em;
          margin: 0;
          line-height: 10px;
        }
      }
    }
  }

  .body__section {
    padding: 40px 0 100px 0;
    z-index: 5;
    flex-direction: column;
    width: 90%;

    .body__text__wrap {
      max-width: 830px;
      .body__text {
        font-family: "HerokidBoldWide", sans-serif;
        font-size: 1em;
        margin: 0;
        text-align: center;
      }
    }

    .faq__listwrap {
      margin: 40px 0;
      flex-direction: column;
      max-width: 740px;

      .faqslab {
        padding: 20px 40px;
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

      .firstslab {
        .faq__answelist {
          .answer__text {
            text-align: start;
          }
        }
      }

      #activeFaq {
        width: 100%;
      }
    }
  }

  @media (max-width: 850px) {
    .tab__section {
      .tab__faq__main {
        max-width: 500px;
        margin-right: 0;

        .tab__faq__item {
          padding: 10px;

          .faq__tab__text {
            font-size: 0.8em;
          }
          .faq__tab__activity {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .faq__flowers {
      top: 680px;
    }
    .faq__header__section {
      padding: 70px 20px;
      .header__innerwrap {
        width: max-content;
        align-items: flex-end;
        .header__text {
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

  @media (max-width: 600px) {
    .body__section {
      .faq__listwrap {
        .faqslab {
          padding: 10px 20px;
          .open__faq {
            right: 15px;
            top: 24px;
            svg {
              font-size: 16px;
            }
          }
          .faq__question {
            font-size: 1em;
            margin-right: 10px;
          }
          .faq__answelist {
            .answer__title,
            .answer__text {
              text-align: center;
              font-size: 0.9em;
            }
          }
        }

        #activeFaq {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .faq__flowers {
      top: 370px;

      img {
        min-height: 600px;
        margin-top: -50px;
      }
    }
    .faq__header__section {
      .header__innerwrap {
        .header__text {
          font-size: 6em;
        }
      }
    }

    .tab__section {
      .tab__faq__main {
        padding: 5px;
        align-items: flex-start;

        .tab__faq__item {
          padding: 10px 5px;
          text-align: center;

          .faq__tab__text {
            font-size: 0.7em;
          }
        }
      }
    }
    .body__section {
      padding: 20px 0 10px 0;
      .body__text__wrap {
        .body__text {
          font-size: 0.8em;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .tab__section {
      .tab__faq__main {
        .tab__faq__item {
          padding: 10px 5px;
          text-align: center;

          .faq__tab__text {
            font-size: 0.6em;
          }
        }
      }
    }
    .body__section {
      .faq__listwrap {
        .faqslab {
          .faq__answelist {
            .answer__title,
            .answer__text {
              text-align: center;
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }
`;
