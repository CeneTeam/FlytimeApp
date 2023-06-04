import React from "react";
import { ToTheWorldWrapper } from "./toTheWorld.styles";
import { Box } from "../Box/styles";
import { staticBaseUrl } from "../../../network/static";

const ToTheWorld = ({ horizontal, absoluteMobile, noweb, backgroundColor }) => {
  return (
    <ToTheWorldWrapper
      horizontal={horizontal}
      absoluteMobile={absoluteMobile}
      noweb={noweb}
      backgroundColor={backgroundColor}
    >
      <Box className="worldwrap__inner">
        {num.map((item, idx) => (
          <Box key={idx + "item"}>
            <img src={`${staticBaseUrl}to-the-worls.svg`} alt="" />
            <p>FROM AFRICA TO THE WORLD</p>
          </Box>
        ))}
      </Box>
    </ToTheWorldWrapper>
  );
};

const num = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
export default ToTheWorld;
