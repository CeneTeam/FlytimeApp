import React from "react";
import { Box } from "../../../components/lib/Box/styles";
import { FaveMomentsWrapper } from "../flashbackDays.styles";

const FaveMoments = ({ data }) => {
  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <FaveMomentsWrapper
      color={data?.color}
      noThirdSection={!data?.thirdSectionTitle ? true : false}
    >
      <Box className="headerwrap">
        <h1 className="header__text">{data?.secondSectionTitle}</h1>
        <h5 className="header__description">
          {data?.secondSectionDescription}
        </h5>
        {data?.headlinersText && (
          <h5 className="header__description">Headliners- {data?.djs}</h5>
        )}
        {data?.djs && <h5 className="header__description">DJS: {data?.djs}</h5>}
        {data?.hostedBy && (
          <h5 className="header__description">Hosts: {data?.hostedBy}</h5>
        )}
        {data?.surpriseActs && (
          <h5 className="header__description">
            Surprise Acts: {data?.surpriseActs}
          </h5>
        )}
        {data?.venue && (
          <h5 className="header__description">Venue: {data?.venue}</h5>
        )}
      </Box>

      <Box className="images__wrap">
        <Box className="boldimages__wrap">
          <Box className="boldimages__sub__wrap">
            {data?.secondSectionImages?.map((item, idx) => (
              <div id={"image" + idx} key={idx}>
                <img src={item?.image?.url} />
              </div>
            ))}
          </Box>
        </Box>

        <Box className="smallimages__wrap">
          <Box className="smallimages__sub__wrap">
            {data?.secondSectionImages?.map((item, idx) => (
              <div key={idx} onClick={() => scrollIntoView("image" + idx)}>
                <img src={item?.image?.url} />
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </FaveMomentsWrapper>
  );
};

export default FaveMoments;
