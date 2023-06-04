import styled from "styled-components";
import { Box } from "../Box/styles";

export const ProgressBarWrapper = styled(Box)`
  width: 100%;
  height: 4px;
  margin: 5px 0;
  background-color: var(--poprevWhite);

  .progressbar__inner {
    height: 100%;
    background-color: var(--poprevYellow);
  }
`;
