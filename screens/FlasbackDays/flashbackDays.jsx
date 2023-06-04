import React, { useEffect, useState } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box } from "../../components/lib/Box/styles";
import { FlashbackDaysWrapper } from "./flashbackDays.styles";
import { FlytimeIcon } from "../../assets/images/layout/svgExports";
import { useRouter } from "next/router";
import { getFlashbackDay } from "../../network/about";
import HeroFooterCarousel from "./Sections/heroFooterCarousel";
import HeadLiners from "./Sections/headliner";
import FaveMoments from "./Sections/faveMoments";
import GreenRoom from "./Sections/greenroom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const FlashbackDays = () => {
  const { query } = useRouter();
  const [dayData, setDayData] = useState({});
  const [nextData, setNextData] = useState({});
  const [prevData, setPrevData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (query.dayId) {
      getDayData(query.dayId);
    }
  }, [query]);

  useEffect(() => {
    if (query.dayId) {
      getDayData(query.dayId);
    }
  }, [query]);

  useEffect(() => {
    const daysIdList = JSON.parse(localStorage.getItem("flashbackIdsList"));

    if (daysIdList) {
      const currentDay = daysIdList.find(({ dayId }) => dayId === query?.dayId);
      setNextData(daysIdList[daysIdList.indexOf(currentDay) + 1]);
      setPrevData(daysIdList[daysIdList.indexOf(currentDay) - 1]);
    }
  }, [query]);

  const getDayData = async (id) => {
    try {
      const data = await getFlashbackDay(id);
      setDayData(data?.PostLayout[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRoute = (direction) => {
    let dayId = direction === "next" ? nextData?.dayId : prevData?.dayId;
    router.push({
      pathname: `/flashback`,
      query: { dayId },
    });
  };

  return (
    <GeneralLayout>
      <FlashbackDaysWrapper color={dayData?.color}>
        <Box className="fashback__herosection">
          <Box className="herosection__textwrap">
            <Box className="flytime__icon">
              <FlytimeIcon color="#fff" />
            </Box>
            <h2 className="hero__headertext">
              <span>FLYTIME FEST</span> {dayData?.year}
            </h2>
            <h5 className="day__text">DAY {dayData?.day}</h5>
            <h2 className="day__activity">{dayData?.dayTitle}</h2>
            <h5 className="hero__description">{dayData?.dayDescription}</h5>
          </Box>
          <Box className="overlay"></Box>
          <Box className="background__image">
            <img src={dayData?.heroImage?.url} alt="" />
          </Box>
        </Box>
        <HeroFooterCarousel data={dayData} />
        {!!dayData?.headliners?.Headliner?.length && (
          <HeadLiners data={dayData} />
        )}
        <FaveMoments data={dayData} />
        {dayData?.thirdSectionTitle && (
          <HeroFooterCarousel data={dayData} bgcolor="#fff" />
        )}
        {dayData?.thirdSectionTitle && <GreenRoom data={dayData} />}

        <Box className="route__wrap">
          <Box className="routeswrap__main">
            <Box className="route">
              {!!prevData && (
                <>
                  <HiArrowSmLeft />
                  <h3
                    className="route__text"
                    onClick={() => handleRoute("prev")}
                  >
                    Go To Day {prevData?.day}, {prevData?.year}
                  </h3>
                </>
              )}
            </Box>
            <Box className="route">
              {!!nextData && (
                <>
                  <h3
                    className="route__text"
                    onClick={() => handleRoute("next")}
                  >
                    Go To Day {nextData?.day}, {nextData?.year}
                  </h3>
                  <HiArrowSmRight />
                </>
              )}
            </Box>
          </Box>
          <Box height="30px" backgroundcolor={dayData?.color}></Box>
        </Box>
      </FlashbackDaysWrapper>
    </GeneralLayout>
  );
};

export default FlashbackDays;
