import styled from "styled-components";
import { Box, Section } from "../../components/lib/Box/styles";

export const HomePageWrapper = styled(Box)`
  .hero__section {
    height: calc(100vh - 120px);
    min-height: calc(100vh - 120px);
    position: relative;

    .herotext__section {
      height: 100%;
      z-index: 2;
      background-color: #000000c2;
      flex-direction: column;
      padding: 0 20px;
      flex-wrap: nowrap;

      .hero__header {
        color: var(--whitePrimary);
        font-size: 12vw;
        margin: 0;
        text-align: center;
        line-height: 1.3em;
      }

      .hero__subheader {
        color: var(--whitePrimary);
        font-size: 1.4vw;
        text-align: center;
        max-width: 45vw;
      }
      .herobuttons__wrap {
        justify-content: space-evenly;

        margin: 50px 0 70px 0;
        max-width: 580px;
        button {
          font-size: 15px;
          width: 16.3em;
          height: 60px;

          :hover {
            svg {
              path {
                transition: all 0.3s ease-in-out;
                fill: var(--purplePrimary);
              }
            }
          }
        }
      }

      .date__wrap {
        justify-content: space-between;
        max-width: 250px;

        .date__countdown {
          color: var(--whitePrimary);
          font-size: 1.7em;

          text-align: center;
          line-height: 1em;
        }
      }
    }

    .audioicon__wrap {
      position: absolute;
      z-index: 7;
      left: 20px;
      bottom: 30px;
      cursor: pointer;
      svg {
        color: var(--limePrimary);
        font-size: 30px;
      }
      .mobile__watchtext__wrap {
        margin: 0 0 0 5px;
        overflow: hidden;
        .mobile__watchtext {
          color: var(--limePrimary);
          font-size: 0.7em;
          animation: transalate 20s infinite ease-in-out;
          svg {
            font-size: 20px;
          }
          @media (min-width: 800px) {
            display: none;
          }
        }
      }

      @keyframes transalate {
        0%,
        25%,
        100% {
          transform: translateX(-200px);
        }
        5%,
        20% {
          transform: translateX(0);
        }
      }
    }

    .video__wrap {
      position: absolute;
      height: 100%;
      z-index: 1;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media (max-width: 800px) {
      .herotext__section {
        .hero__header {
          font-size: 20vw;
        }

        .hero__subheader {
          font-size: 2vw;
          max-width: 90vw;
        }
        .herobuttons__wrap {
          margin: 30px 0 50px 0;
        }
      }
    }

    @media (max-width: 1000px) {
      .herotext__section {
        .herobuttons__wrap {
          max-width: 420px;
          button {
            margin-bottom: 20px;
            font-size: 13px;
            width: 14em;
            height: 46px;
            svg {
              margin-left: 15px;
            }
          }
          .green__button {
            svg {
              margin-right: -15px !important;
            }
          }
        }
      }
    }

    @media (max-width: 800px) {
      height: calc(100vh - 90px);
      min-height: calc(100vh - 90px);

      .herotext__section {
        background-color: #000000bd;
        .hero__header {
          /* font-size: 14vw; */
          line-height: 1.8em;
        }

        .hero__subheader {
          font-size: 1.1em;
        }
        .herobuttons__wrap {
          flex-direction: column-reverse;
        }
        .date__wrap {
          max-width: 200px;
          .date__countdown {
            font-size: 1.2em;
          }
        }
      }
    }
  }
`;

export const LineupsWrapper = styled(Section)`
  position: relative;
  /* min-height: 120vh; */
  align-items: flex-start;
  @media (max-width: 800px) {
    min-height: max-content;
  }

  .flower__wrap__web {
    position: absolute;
    z-index: 1;
    top: 50px;
    max-height: 920px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .flower__wrap__mobile {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 870px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (min-width: 1000px) {
      display: none;
    }
  }

  .lineup__textsection {
    z-index: 2;
    flex-direction: column;
    padding: 100px 20px 50px 20px;
    flex-wrap: nowrap;

    .lineup__lightheader {
      font-family: "HerokidLightExpanded", sans-serif;
      color: var(--whitePrimary);
      font-size: 4.5em;
      line-height: 1em;
    }

    .lineup__mainheader {
      color: var(--whitePrimary);
      font-size: 9em;
      line-height: 1em;
      position: relative;
      margin: 0 0 30px 0;
      svg {
        position: absolute;
        right: -180px;
        top: -80px;
        width: 34%;
      }
    }
    .lineup__subheader {
      color: var(--whitePrimary);
      font-size: 1.3em;
      text-align: center;
      max-width: 970px;
    }

    .lineup__carousel {
      max-width: 1200px;
      overflow-x: auto;

      .lineup__card__sub {
        width: max-content;
        flex-wrap: nowrap;
        justify-content: flex-start;
        min-height: 700px;

        .lineup__card {
          width: max-content;
          flex-wrap: nowrap;
          flex-direction: column;
          cursor: pointer;
          .card__image {
            width: 330px;
            min-width: 330px;
            height: 430px;
            transition: all 0.3s ease;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .card__date {
            color: var(--whitePrimary);
            margin: 0;
            font-size: 1.3em;
            padding: 7px 0 2px 0;
            font-family: "HerokidLightWide", sans-serif;
            span {
              font-family: "HerokidExtraBoldWide", sans-serif;
            }
          }
          .card__gettickets {
            font-family: "HerokidBoldWide", sans-serif;
            color: var(--whitePrimary);
            font-size: 1.3em;
            padding: 7px 0;
          }
        }
        #activeCard {
          .card__image {
            width: 420px;
            min-width: 420px;
            height: 550px;
          }
        }
      }
    }

    @media (max-width: 800px) {
      padding: 70px 20px 50px 20px;
      .lineup__lightheader {
        font-size: 2.5em;
      }
      .lineup__mainheader {
        font-size: 5em;

        svg {
          right: -40px;
          top: -150px;
          width: 25%;
        }
      }
      .lineup__subheader {
        font-size: 1em;
      }

      .lineup__carousel {
        .lineup__card__sub {
          min-height: 600px;

          #activeCard,
          .lineup__card {
            margin-right: 20px;

            .card__image {
              width: 330px;
              min-width: 330px;
              height: 430px;
            }
          }
        }
      }
    }

    @media (max-width: 500px) {
      .lineup__carousel {
        .lineup__card__sub {
          min-height: 550px;

          #activeCard,
          .lineup__card {
            .card__image {
              width: 310px;
              min-width: 310px;
              height: 400px;
            }

            .card__date,
            .card__gettickets {
              font-size: 1em;
            }
          }
        }
      }
    }
  }
`;

export const ProgressBarWrapper = styled(Box)`
  width: 100%;
  height: 7px;
  margin: 20px 0;
  border: 1px solid var(--whiteSecondary);
  position: relative;
  max-width: 1200px !important;

  .progressbar__inner {
    height: 7px;
    background-color: var(--yellowPrimary);
    position: absolute;
    top: -1px;
    left: -1px;
    transition: width 0.3s ease;
  }
  @media (max-width: 500px) {
    margin: 7px 0 0 0;
  }
`;

export const FaqsWrapper = styled(Section)`
  position: relative;
  width: 100%;
  background-color: var(--whitePrimary);
  overflow: hidden;

  .faq_flower__wrap {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 1800px;
      object-fit: cover;
    }

    @media (max-width: 1100px) {
      img {
        height: 1300px;
      }
    }

    @media (max-width: 800px) {
      bottom: -100px;
      img {
        height: 600px;
      }
    }
  }

  .faq_textsecton {
    flex-direction: column;
    z-index: 3;
    padding: 100px 20px;
    background-color: #00000011;
    .faq__mainheader {
      font-size: 9em;
      line-height: 1em;
      color: var(--blackPrimary);
      margin: 0;
    }

    @media (max-width: 700px) {
      .faq__mainheader {
        font-size: 4em;
      }

      padding: 50px 20px;
    }
    .faq__listwrap {
      margin: 40px 0;
      flex-direction: column;
      max-width: 700px;

      .faqslab {
        padding: 20px 40px;
        margin-bottom: 20px;
        overflow: hidden;
        flex-wrap: nowrap;
        transition: all 0.3s ease;
        flex-direction: column;
        cursor: pointer;
        width: 90%;
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

      @media (max-width: 600px) {
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

      @media (max-width: 400px) {
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

export const AboutWrapper = styled(Section)`
  .about__body {
    height: calc(100vh - 70px);
    justify-content: space-between;
    position: relative;
    overflow: hidden !important;

    .fest__image {
      width: 150px;
      min-width: 100px;
      height: 100%;
      background-color: var(--whitePrimary);

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

    .about__textsection {
      position: relative;
      height: 100%;
      width: calc(100% - 190px);
      overflow: hidden;

      .abouttext__wrap__main {
        height: 100%;
        /* background-color: #000000c4; */
        z-index: 3;
        flex-direction: column;
        padding: 20px;
        flex-wrap: nowrap;

        .about__header {
          color: var(--whitePrimary);
          font-size: 8em;
          text-align: center;
          line-height: 2em;
          margin: 0;
        }
        .about__header__colored {
          color: var(--purplePrimary);
          font-size: 5em;
          text-align: center;
          line-height: 1em;
        }

        .about__subheader {
          color: var(--whitePrimary);
          font-size: 1em;
          text-align: center;
          max-width: 580px;
          line-height: 1.9em;
          margin-bottom: 40px;
        }
        button {
          z-index: 999999999;
        }

        @media (max-height: 700px) and (min-width: 1000px) {
          .about__header {
            font-size: 6em;
          }
          .about__header__colored {
            font-size: 4em;
          }
        }
      }
      .about__flower__web {
        position: absolute;
        height: 100%;
        top: 0;
        z-index: 2;
        background-color: #000000c4;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          margin-right: -130px;
        }
      }
      .about__flower__mobile {
        position: absolute;
        right: 0;
        bottom: -100px;
        z-index: 4;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        @media (min-width: 900px) {
          display: none;
        }
      }

      .flytime__people {
        position: absolute;
        height: 100%;
        z-index: 2;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .fest__image {
        width: calc(100% - 30px);
        height: 120px;
        background-color: var(--whitePrimary);
        .festimage__web {
          display: none;
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
      .about__textsection {
        width: 100%;

        .flytime__people {
          height: 100%;
        }
        .about__flower__web {
          display: none;
        }

        .abouttext__wrap__main {
          background-color: #000000c4;

          .about__header {
            font-size: 5em;
          }
          .about__header__colored {
            font-size: 3em;
          }

          .about__subheader {
            font-size: 0.9em;
            width: 90%;
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
      }

      .fest__image {
        width: calc(100% - 30px);
        height: 120px;
        background-color: #f0f0e6;
        padding: 0 15px;
        .festimage__web {
          display: none;
        }
      }
    }

    @media (max-width: 400px) {
      .about__textsection {
        .abouttext__wrap__main {
          .about__header {
            font-size: 4em;
          }
          .about__header__colored {
            font-size: 2.5em;
          }

          .about__subheader {
            font-size: 0.7em;
            width: 90%;
          }
        }
      }
    }
  }
`;
