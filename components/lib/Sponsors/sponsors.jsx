import React from "react";
import { SponsorsWrapper } from "./sponsors.styles";
import { Box } from "../Box/styles";
import { useQuery } from "@tanstack/react-query";
import { sponsorLogos } from "../../../network/homepage";

const Sponsors = ({ backgroundColor }) => {
  const { data } = useQuery(["sponsors"], sponsorLogos);
  const sponsorsList = data && data?.PostLayout[0];

  const duplicateLogos = ["", "", "", ""];
  return (
    <SponsorsWrapper backgroundColor={backgroundColor}>
      {duplicateLogos.map((logo, idx) => (
        <React.Fragment key={idx}>
          {sponsorsList?.sponsors?.map((logo, idx) => (
            <Box className="sponsor__logo" key={idx + "go"}>
              <img src={logo?.image?.url} alt="" />
            </Box>
          ))}
        </React.Fragment>
      ))}
    </SponsorsWrapper>
  );
};

export default Sponsors;
