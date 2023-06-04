import React from "react";
import { Box } from "../../../components/lib/Box/styles";
import { GreenroomWrapper } from "../flashbackDays.styles";

const GreenRoom = ({ data }) => {
  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <GreenroomWrapper color={data?.color}>
      <Box className="headerwrap">
        <h1 className="header__text">{data?.thirdSectionTitle}</h1>
        <h5 className="header__description">{data?.thirdSectionDescription}</h5>
      </Box>

      <Box className="images__wrap">
        <Box className="boldimages__wrap">
          <Box className="boldimages__sub__wrap">
            {data?.thirdSectionImages?.map((item, idx) => (
              <div id={"card" + idx} key={idx}>
                <img src={item?.image?.url} />
              </div>
            ))}
          </Box>
        </Box>

        <Box className="smallimages__wrap">
          <Box className="smallimages__sub__wrap">
            {data?.thirdSectionImages?.map((item, idx) => (
              <div key={idx} onClick={() => scrollIntoView("card" + idx)}>
                <img src={item?.image?.url} />
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </GreenroomWrapper>
  );
};

export default GreenRoom;
