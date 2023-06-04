import styled from "styled-components";
import { Box } from "../../../lib/Box/styles";

export const FooterStyles = styled(Box)`
  padding: 30px 50px 50px 50px;
  flex-direction: column;

  .links__wrap {
    justify-content: space-between;
    margin: 20px 0;
    a {
      font-family: "HerokidLightWide", sans-serif;
      color: var(--whiteSecondary);
      font-size: 13px;
    }
    .icons__wrap {
      width: max-content;
      min-height: 20px;
      margin-left: -50px;

      svg {
        width: 25px;
        margin: 0 10px;
        transition: all 0.3s ease;

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .flytime__icon {
    margin-right: -50px;
  }

  @media (max-width: 800px) {
    align-items: center;
    padding: 0;
    .flytime__icon {
      margin-right: -0;
      svg {
        width: 70px;
      }
    }
    .links__wrap {
      flex-direction: column;
      margin: -10px 0 50px 0;
      span {
        margin-bottom: 7px;
        opacity: 0.7;
      }
      .icons__wrap {
        order: -1;
        margin-left: 0;

        svg {
          width: 20px;
          margin: 0 7px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    width: ${({ noFullFooter }) =>
      noFullFooter ? "calc(100% - 180px)" : "100%"};
    margin-left: ${({ noFullFooter }) => (noFullFooter ? "180px" : "0")};
  }
`;
