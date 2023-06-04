import React from "react";
import { DaysWrapper } from "./daysLineup.styles";
import { Box } from "../Box/styles";
import { HiOutlineArrowRight as Arrow } from "react-icons/hi";
import { getLineupFooterCarousel } from "../../../network/lineup";
import { useQuery } from "@tanstack/react-query";

const DaysLineup = ({ backgroundcolor, noAnimation, horizontal }) => {
  const { data } = useQuery(["lineupfooter"], getLineupFooterCarousel);
  const lineupDays = data && data?.PostLayout;

  const duplicateDays = ["", "", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <>
      {data?.status === "published" && (
        <DaysWrapper
          backgroundcolor={backgroundcolor}
          noAnimation={noAnimation}
          horizontal={horizontal}
        >
          <Box className="dayswrap__inner">
            {duplicateDays.map((logo, idx) => (
              <React.Fragment key={idx}>
                {lineupDays.map((item, idx) => (
                  <Box className="day__play" key={idx + "item"}>
                    <h2>DAY {item.day}</h2> <Arrow />
                    <h3>{item.date}</h3> <p>|</p>{" "}
                    <h4 className={idx === 0 ? "rhythm" : ""}>
                      {item.activity}
                      {item?.feat && (
                        <>
                          {""} <span>FEAT. </span>
                          {item.feat}
                        </>
                      )}
                    </h4>
                    <p>|</p>
                  </Box>
                ))}
              </React.Fragment>
            ))}
          </Box>
        </DaysWrapper>
      )}
    </>
  );
};
export default DaysLineup;
