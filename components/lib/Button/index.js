import styled from "styled-components";
import { Button } from "antd";

export default styled(Button)`
  width: ${({ width }) => width || "160px"};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height || "45px"};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border || "1px solid var(--limePrimary)"};
  border-color: ${({ backgroundcolor }) =>
    backgroundcolor || "var(--limePrimary)"};
  background: ${({ backgroundcolor }) =>
    backgroundcolor || "var(--limePrimary)"};
  border-radius: ${({ radius }) => radius || "0"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};
  opacity: ${({ opacity }) => opacity || "1"};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ color }) => color || "var(--blackPrimary) !!mportant"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  z-index: 9999999999999;

  svg {
    font-size: 11px;
    color: inherit;
    margin: 0 0 -6px 7px;
    transition: all 0.3s ease;
    color: ${({ color }) => color || "var(--poprevFadedWhite)"};
  }

  :focus,
  :active,
  :hover {
    background: ${({ hoverBg }) => hoverBg || "transparent"};
    color: ${({ hoverBg, backgroundcolor, hoverColor }) =>
      hoverBg
        ? "var(--blackPrimary)"
        : hoverColor || backgroundcolor || "var(--limePrimary)"};
    border-color: ${({ backgroundcolor, hoverBg, hoverColor }) =>
      hoverBg
        ? hoverBg
        : hoverColor || backgroundcolor || "var(--limePrimary)"};
  }
`;
