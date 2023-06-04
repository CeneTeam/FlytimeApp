import React, { useState, useRef } from "react";
import { Box } from "../../../components/lib/Box/styles";
import { LineupsWrapper, ProgressBarWrapper } from "../homePage.styles";
import { FlytimeIcon } from "../../../assets/images/layout/svgExports";

const LineupSection = ({ lineupSectionData, lineupCardsData }) => {
  const [progressWidth, setrogressWidth] = useState("25");
  const [activeCard, setActiveCard] = useState("card1");
  const linupCardRef = useRef(null);

  const onLineupCardCardScroll = () => {
    if (linupCardRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = linupCardRef.current;
      const totalDocScrollLength = scrollWidth - clientWidth;
      const scrollPostion = Math.floor(
        (scrollLeft / totalDocScrollLength) * 100
      );

      if (scrollPostion <= 25) {
        setActiveCard("card0");
        setrogressWidth("25");
      } else if (scrollPostion > 25 && scrollPostion <= 50) {
        setActiveCard("card1");
        setrogressWidth("50");
      } else if (scrollPostion > 50 && scrollPostion <= 75) {
        setActiveCard("card2");
        setrogressWidth("75");
      } else if (scrollPostion > 75) {
        setrogressWidth("100");
        setActiveCard("card3");
      }
    }
  };

  const onLineupHover = (idx) => {
    const val = 100 / lineupCardsData?.layout?.length;
    setrogressWidth(val * (idx + 1) + "");
    setActiveCard("card" + idx);
  };

  return (
    <LineupsWrapper>
      <Box className="flower__wrap__web">
        <img src={lineupSectionData?.webFlower?.url} alt="" />
      </Box>
      <Box className="flower__wrap__mobile">
        <img src={lineupSectionData?.mobileFlower?.url} alt="" />
      </Box>

      <Box className="lineup__textsection">
        <h4 className="lineup__lightheader">{lineupSectionData?.heading}</h4>
        <h1 className="lineup__mainheader">
          {lineupSectionData?.boldHeading}
          <FlytimeIcon color="var(--greenPrimary)" />
        </h1>
        <h5 className="lineup__subheader">{lineupSectionData?.description}</h5>
        <Box className="lineup__carousel"></Box>

        <Box
          className="lineup__carousel"
          ref={linupCardRef}
          onScroll={onLineupCardCardScroll}
        >
          <Box className="lineup__card__sub">
            {lineupCardsData?.PostLayout?.map((item, idx) => (
              <Box
                className="lineup__card"
                id={activeCard === "card" + idx ? "activeCard" : ""}
                margin={idx === 3 ? "0" : "0 50px 0 0"}
                key={idx + "random"}
                onMouseEnter={() => onLineupHover(idx)}
                backgroundcolor={item.color}
              >
                <h1
                  className="card__date"
                  style={{ color: item.day === 3 && "var(--blackPrimary)" }}
                >
                  DAY {item.day} - <span>{item.date}</span>
                </h1>
                <Box className="card__image">
                  <img src={item?.image?.url} alt="" />
                </Box>
                {!!item.soldOut ? (
                  <h4 className="card__gettickets">SOLD OUT</h4>
                ) : (
                  <a href={item.to} target="_blank" rel="noreferrer">
                    <h4 className="card__gettickets">GET TICKETS</h4>
                  </a>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <ProgressBarWrapper justifyContent="flex-start">
          <Box className="progressbar__inner" width={`${progressWidth}%`}></Box>
        </ProgressBarWrapper>
      </Box>
    </LineupsWrapper>
  );
};

export default LineupSection;
