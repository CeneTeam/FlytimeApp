import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const TermsAndConditionsWrapper = styled(Box)`
  background-color: #eeefe8;

  .header__section {
    padding: 100px 20px;
    position: relative;
    background-color: var(--purplePrimary);
    overflow: hidden;

    .header__innerwrap {
      position: relative;
      width: max-content;

      .tandc__header__text {
        color: #eeefe8;
        margin: 0;
        font-size: 10em;
        line-height: 1em;
        z-index: 2;
      }
      svg {
        z-index: 2;
        position: absolute;
        left: -160px;
        top: -50px;
      }
    }

    .header__flower {
      position: absolute;
      width: 100%;
      height: auto;
      object-fit: cover;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  }

  .body__section {
    padding: 50px 60px;
    flex-direction: column;
    align-items: flex-start;

    .bold__intro__text {
      font-size: 0.9em;
      line-height: 3em;
      font-family: "HerokidSemiBold", sans-serif;
    }

    .body__header {
      font-size: 1.1em;
      line-height: 2em;
      margin: 20px 0;
    }

    .body__text {
      font-size: 0.9em;
      b {
        font-family: "HerokidSemiBold", sans-serif;
      }
    }
  }

  @media (max-width: 1000px) {
    .header__section {
      .header__innerwrap {
        .tandc__header__text {
          font-size: 8em;
        }
        svg {
          width: 100px;
          left: -110px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .header__section {
      padding: 80px 20px;
      .header__innerwrap {
        .tandc__header__text {
          max-width: 270px;
          align-items: center;
        }
        svg {
          top: -90px;
          left: -100px;
        }
      }
    }

    .body__section {
      padding: 50px 20px;

      .bold__intro__text {
        font-size: 0.8em;
        line-height: 2.5em;
      }

      .body__header {
        font-size: 1em;
        line-height: 1.8em;
        margin: 10px 0;
      }

      .body__text {
        font-size: 0.8em;
      }
    }
  }

  @media (max-width: 500px) {
    .header__section {
      padding: 70px 20px;
      .header__innerwrap {
        .tandc__header__text {
          font-size: 6em;
          max-width: 200px;
        }
        svg {
          left: -80px;
          width: 80px;
        }
      }
    }
  }
  @media (max-width: 370px) {
    .header__section {
      .header__innerwrap {
        .tandc__header__text {
          font-size: 5em;
          max-width: 170px;
        }
      }
    }
  }
`;
