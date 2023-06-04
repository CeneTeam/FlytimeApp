import { Modal } from "antd";
import styled from "styled-components";

export const LayoutWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow-x: hidden;
  background-color: var(--blackPrimary);
  position: relative;

  .general__layout__main {
    width: 100%;
    z-index: 2;
    min-height: 100vh;
    margin-top: 120px;

    @media (max-width: 800px) {
      margin-top: 90px;
    }
  }

  .cover {
    width: 100vw;
    height: 100vh;
    background-color: var(--blackPrimary);
    z-index: 99999999999999999;
    position: fixed;

    svg {
      path {
        stroke: var(--whiteSecondary);
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: dash 7s infinite linear, opacity 1.5s 1 ease-in-out;
        opacity: 1;
      }
    }
    .flutter__logo {
      width: 320px;
      overflow: hidden;
      min-width: 200px;

      img {
        width: 112%;
        height: auto;
        animation: translate 1.5s 1 linear;
        object-fit: cover;
        margin: 0 0 -50px 0;
      }
    }
    @keyframes dash {
      to {
        stroke-dashoffset: 1000;
      }
    }
    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes translate {
      from {
        transform: translateX(400px);
      }
      to {
        transform: translateX(0);
      }
    }

    @media (max-width: 600px) {
      .flutter__logo {
        width: 30%;
        min-width: 150px;
        img {
          width: 115%;
          margin: 0 0 -30px 0;
        }
      }
      svg {
        width: 120px;
        margin: 0 0 -40px 5px;
      }
    }
  }

  .signup__modal {
    position: fixed;
    background-color: #00000099;
    height: 100vh;
    z-index: 99999999999999999;
    top: 0;
    transition: all 0.5s ease;
    transform: ${({ getTickets }) =>
      getTickets ? "translateY(0)" : "translateY(-100vh)"};

    .overLay {
      position: absolute;
      height: 100vh;
      bottom: 0;
      z-index: 8;
      bottom: 0;
      width: 100vw;
    }
    .close__icon {
      position: fixed;
      z-index: 9;
      top: 50px;
      right: 15px;

      svg {
        color: #fff;
        font-size: 30px;
      }

      @media (max-width: 600px) {
        top: 30px;
        svg {
          font-size: 20px;
        }
      }
    }

    & > div {
      max-width: 600px;
      z-index: 99999999999999999;
      width: 90%;

      & > div {
        & > div {
          padding-top: 50px;
        }
      }
    }
  }
`;

export const SignupModal = styled(Modal)`
  .ant-modal-content {
    display: none;
  }
`;
