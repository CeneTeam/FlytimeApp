import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const FestivalRulesWrapper = styled(Box)`
  overflow: hidden;
  flex-direction: column;
  position: relative;
  padding: 50px 20px;

  .rules__flowers {
    position: absolute;
    z-index: 1;
    top: 0;
    opacity: 0.5;
    img {
      width: 130%;
      height: auto;
      object-fit: fill;
    }
  }

  .rules__subwrap {
    flex-direction: column;
    max-width: 900px;
    .header__text {
      font-size: 8em;
      margin-bottom: 20px;
      padding: 0;
      z-index: 2;
      color: var(--whitePrimary);
      span {
        color: var(--purplePrimary);
      }
    }
    .sub__header,
    .item__number,
    .insructions {
      font-size: 1.2em;
      z-index: 2;
      color: var(--limePrimary);
      text-align: center;
      max-width: 750px;
      line-height: 2.3em;
    }
    .item__number {
      font-family: "HerokidBoldWide", sans-serif;
    }
    .insructions {
      color: var(--whitePrimary);
      max-width: 100%;
      font-family: "HerokidBoldWide", sans-serif;
      font-size: 1em;
      margin-bottom: 30px;
    }
    .footer {
      margin-top: 30px;
    }
  }

  @media (max-width: 500px) {
    .rules__subwrap {
      .header__text {
        font-size: 6em;
      }
      .sub__header,
      .item__number,
      .insructions {
        font-size: 1em;
        line-height: 2em;
      }

      .insructions {
        font-size: 0.8em;
      }
      .footer {
        margin-top: 10px;
      }
    }
    .rules__flowers {
      transform: rotate(180deg);
      img {
        width: 150%;
      }
    }
  }
`;
