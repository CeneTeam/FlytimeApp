import React from "react";
import { Box } from "../../../components/lib/Box/styles";
import { HeroFooterCarouselWrapper } from "../flashbackDays.styles";

const HeroFooterCarousel = ({ data, bgcolor }) => {
  const duplicateDays = ["", "", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <HeroFooterCarouselWrapper backgroundcolor={bgcolor || data.color}>
      <Box className="dayswrap__inner">
        {duplicateDays.map((logo, idx) => (
          <React.Fragment key={idx}>
            {!data?.djs ? (
              <Box className="day__play">
                <h3>DAY {data.dayTitle}</h3>
                <p>|</p>
                <h4 className="rhythm">{data.year}</h4> <p>|</p>
                <h2>DAY {data.day}</h2>
                <p>|</p>
                <h4>{data?.date}</h4> <p>|</p>
              </Box>
            ) : (
              <Box className="day__play">
                <h3>Djs: {data.djs}</h3>
                <p>|</p>
                <h4 className="rhythm">
                  {data?.supriseActs ? "Surprise Acts:" : "Hosted By"}{" "}
                  {data?.supriseActs || data?.hostedBy}
                </h4>{" "}
                <p>|</p>
                <h2>Headliners: {data.headlinersText}</h2>
                <p>|</p>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </HeroFooterCarouselWrapper>
  );
};

export default HeroFooterCarousel;
