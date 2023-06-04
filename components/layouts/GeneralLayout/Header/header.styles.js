import styled from "styled-components";
import { Box } from "../../../lib/Box/styles";

export const MobileHeaderStyles = styled(Box)`
  position: fixed;
  z-index: 9999;
  overflow: hidden !important;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: var(--blackPrimary);
  transition: all 1s ease-in-out;
  justify-content: flex-start;
  top: 0;
  left: 0;
  height: max-content;

  .topsection_wrap {
    justify-content: space-between;
    height: 90px;
    padding: 15px 15px 15px 0;
    min-height: 90px;

    .top__leftsection__wrap {
      justify-content: flex-start;
      flex-wrap: nowrap;
      width: 70%;
      height: 100%;
      max-width: 250px;
      margin: 15px 0 0 15px;

      .logo__wrap {
        cursor: pointer;
        width: 100%;
        svg {
          width: 30%;
        }
      }

      .headerdate__wrap {
        width: 50%;
        margin: 3% 0 0 -7px;
        border-left: 1px solid var(--whitePrimary);
        padding: 4px 7px;

        img {
          height: auto;
          width: 100%;
          object-fit: contain;
          min-width: 70px;
        }
        @media (max-width: 500px) {
          margin-top: 2%;
          padding: 2px 7px;
        }
      }
    }

    .menuicon__wrap {
      margin-bottom: -10px;
      svg {
        color: var(--limePrimary);
        font-size: 28px;
      }
    }
  }

  .mobile__navsection_wrap {
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    transition: all 1.3s ease-in-out;
    height: ${({ showMobileNav }) =>
      showMobileNav ? "calc(100vh - 90px)" : "0"};
    overflow: hidden;

    .mobile__navitems__wrap {
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      padding: 45px 30px;

      .navitem,
      button {
        list-style-type: none;
        font-size: 1em;
        padding: 15px 0;
        transition: all 0.3s ease;
        color: var(--whitePrimary);
        width: max-content;
        height: max-content;
        margin: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;
        box-shadow: none;
        span svg {
          margin: 0 0 -2px -2px;
        }

        :hover {
          color: var(--greenPrimary);
          transform: translateX(7px);
        }
      }

      button {
        :hover,
        :focus,
        :active {
          box-shadow: none;
          outline: none;
          transform: translateX(0px);
        }
      }
      #activepath {
        color: var(--greenPrimary);
      }
    }
    button {
      min-height: 45px;
      margin-bottom: 35%;
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const DesktopHeaderStyles = styled(Box)`
  justify-content: space-between;
  height: 120px;
  overflow: hidden;
  padding: 20px 30px 20px 20px;
  position: fixed;
  z-index: 8;
  top: 0;
  background-color: var(--blackPrimary);

  .leftsection__wrap {
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 27%;
    height: 100%;
    .logo__wrap {
      cursor: pointer;
      width: 100%;
      svg {
        width: 40%;
      }
    }

    @media (max-width: 1160px) {
      .headerdate__wrap {
        padding: 0 7px;
      }
    }
    @media (max-width: 930px) {
      width: 25%;
    }
  }

  .rightsection__wrap {
    width: 60%;
    justify-content: flex-end;
    flex-wrap: nowrap;

    .navitems__wrap {
      width: 80%;
      max-width: 650px;
      height: 100%;
      justify-content: space-between;
      /* margin-right: 12%; */
      margin-right: 3%;

      .navitem,
      button {
        list-style-type: none;
        font-size: 0.9em;
        padding: 30px 0 0 0;
        transition: all 0.3s ease;
        color: var(--whitePrimary);
        width: max-content;
        height: max-content;
        margin: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;

        span svg {
          margin: 0 0 -2px -2px;
        }

        :hover {
          color: var(--greenPrimary);
          transform: translateX(7px);
        }
      }

      button {
        :hover,
        :focus,
        :active {
          box-shadow: none !important;
          outline: none !important;
          transform: translateX(0px);
        }
      }
      #activepath {
        color: var(--greenPrimary);
        transform: translateX(0);
        opacity: 0.7;

        :hover {
          transform: translateX(0);
        }
      }
    }
    @media (max-width: 1250px) {
      width: 65%;
    }

    @media (max-width: 1150px) {
      .navitems__wrap {
        margin-right: 8%;
        .navitem {
          font-size: 0.7em;
        }
      }
    }

    @media (max-width: 930px) {
      .navitems__wrap {
        .navitem {
          font-size: 0.6em;
        }
      }

      button {
        font-size: 0.8em;
        height: 40px;
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
