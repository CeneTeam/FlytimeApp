import React from "react";
import { Box } from "../../../../components/lib/Box/styles";
import {
  FlasbbackCardWrapperWeb,
  FlasbbackCardWrapperMobile,
} from "./yearCard.styles";
import Button from "../../../../components/lib/Button";
import { useRouter } from "next/router";

const FlashbackCard = ({ data, dataIndex }) => {
  const router = useRouter();

  const getDay = (dayId) => {
    router.push({
      pathname: `/flashback`,
      query: { dayId },
    });
  };

  return (
    <>
      <FlasbbackCardWrapperWeb background={data.color}>
        <Box
          className="card__body__wrap"
          id={dataIndex % 2 === 1 ? "odd__cards" : ""}
        >
          <Box className="date__section"></Box>
          <Box className="card__content__wrap">
            <Box className="card__content__left__section">
              <Box className="top__section" backgroundcolor={data.topShade}>
                <h2 className="flytime__text">FLYTIME</h2>
                <h1 className="event__year">{data.year}</h1>
              </Box>
              <Box className="lower__section">
                <h5 className="description">{data.description}</h5>
                <Box className="buttons__wrap">
                  <h5 className="explore__text">Click on a day to explore</h5>
                  <Box className="buttons__mainwrap">
                    {data.buttonActions.map((item, idx) => (
                      <Button
                        key={idx}
                        backgroundcolor={"var(--whitePrimary)"}
                        width="21%"
                        height="50px"
                        hoverBg={data.color}
                        onClick={() => getDay(item?.dayId)}
                      >
                        {data.buttonActions.length > 1
                          ? `DAY ${item?.day}`
                          : "Explore"}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="card__content__right__section">
              <img src={data?.image?.url} alt="" />
            </Box>
          </Box>
        </Box>
      </FlasbbackCardWrapperWeb>

      {/* mobile card */}
      <FlasbbackCardWrapperMobile background={data.color}>
        <Box className="mobile__date__section"></Box>

        <Box className="mobile__card__header">
          <h2 className="flytime__text">FLYTIME</h2>
          <Box className="card__header__bottom">
            <h1 className="event__year">{data.year}</h1>

            <Box className="routes__mainwrap">
              {data.buttonActions.map((item, idx) => (
                <h5
                  className="route__text"
                  key={idx}
                  onClick={() => getDay(item?.dayId)}
                >
                  {data.buttonActions.length > 1
                    ? `DAY ${item?.day}`
                    : "Explore"}
                </h5>
              ))}
            </Box>
          </Box>
        </Box>

        <Box className="mobile__card__body">
          <h5 className="explore__text">Click on a day to explore</h5>
          <Box className="card__image__wrap">
            <div className="overlay"></div>
            <img src={data?.image?.url} alt="" />
          </Box>
        </Box>
        <Box className="description__wrap">
          <h5 className="description">{data.description}</h5>
        </Box>
        <Box className="mobile__date__section"></Box>
      </FlasbbackCardWrapperMobile>
    </>
  );
};

export default FlashbackCard;
