import React from "react";
import { ProgressBarWrapper } from "./progressBar.styles";
import { Box } from "../Box/styles";

const ProgressBar = ({ width }) => {
  return (
    <ProgressBarWrapper justifyContent="flex-start">
      <Box className="progressbar__inner" width={`${width}%`}></Box>
    </ProgressBarWrapper>
  );
};
export default ProgressBar;
