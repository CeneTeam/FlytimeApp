import styled from "styled-components";
import { Box } from "../../components/lib/Box/styles";

export const ContactUsWrapper = styled(Box)`
  background-color: #f0f0e6;
  overflow: hidden;
  height: calc(100vh - 120px);
  flex-direction: column;
  position: relative;

  .contact__flowers {
    position: absolute;
    z-index: 1;
    top: 30px;

    img {
      width: 120%;
      height: auto;
    }
  }

  h2 {
    font-size: 8em;
    margin-bottom: 20px;
    padding: 0;
    z-index: 2;
  }

  h5 {
    font-size: 1em;
    font-family: "HerokidBoldWide", sans-serif;
    z-index: 2;

    small {
      font-size: 1em;
      font-family: "Herokid", sans-serif;
    }
  }
  .call {
    font-size: 5em;
    margin-top: 30px;
  }

  @media (max-width: 800px) {
    height: calc(100vh - 80px);

    h2 {
      font-size: 6em;
    }

    .call {
      font-size: 4em;
    }

    h5 {
      font-size: 0.9em;
    }

    .contact__flowers {
      img {
        width: 140%;
      }
    }
  }
  @media (max-width: 500px) {
    .contact__flowers {
      transform: rotate(180deg);
      img {
        width: 150%;
      }
    }
  }
`;
