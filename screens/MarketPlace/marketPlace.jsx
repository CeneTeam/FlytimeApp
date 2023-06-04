import { useQuery } from "@tanstack/react-query";
import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import Button from "../../components/lib/Button";
import DaysLineup from "../../components/lib/DaysLineup/daysLineup";
import ToTheWorld from "../../components/lib/ToTheWorld/toTheWorld";
import { getFlyVillageData } from "../../network/fly-village";
import { MarketPlaceWrapper } from "./marketPlace.styles";

const MarketPlace = () => {
  const { data: flyVillage } = useQuery(["flydata"], getFlyVillageData);

  const heroSection = flyVillage && flyVillage?.PostLayout[0];
  const everythingFlySection = flyVillage && flyVillage?.PostLayout[1];

  return (
    <GeneralLayout noFullFooter>
      <MarketPlaceWrapper>
        <ToTheWorld absoluteMobile noweb />
        <Section className="mainwrap__section">
          <Box className="eat__title__wrap">
            <h1 className="eat__text">
              {heroSection?.heading} {heroSection?.boldHeading}{" "}
              {heroSection?.subHeading}
            </h1>
          </Box>
          <Box className="body__wrap">
            <div className="fly__village">
              <img src={flyVillage?.postImage?.url} alt="" />
            </div>

            <Box className="body__content">
              <h1 className="bodycontent__header">
                <span className="eat">{heroSection?.heading}</span>
                {heroSection?.boldHeading}
                <span className="play">{heroSection?.subHeading}</span>
              </h1>
              <p className="content__date">{heroSection?.concertDate}</p>
              <h5 className="location">{heroSection?.concertLocation}</h5>
              <Box className="herobuttons__wrap">
                {heroSection?.ButtonLayout?.button?.map((item, idx) => (
                  <a
                    href={item?.to}
                    target="_blank"
                    rel="noreferrer"
                    key={idx + item}
                  >
                    <Button
                      backgroundcolor={
                        item?.buttonBackground || "var(--yellowPrimary)"
                      }
                      color={item?.buttonColor || "var(--whitePrimary)"}
                    >
                      {item?.text}
                    </Button>
                  </a>
                ))}
              </Box>

              <small className="disclaimer">{heroSection?.description}</small>
            </Box>
            <Box className="flower__wrap left__flower">
              <img src={heroSection?.webFlower?.url} alt="" />
            </Box>
            <Box className="flower__wrap right__flower">
              <img src={heroSection?.mobileFlower?.url} alt="" />
            </Box>
            <Box className="days__wrap">
              <DaysLineup horizontal />
            </Box>

            <Box className="everything__fly__section">
              <Box className="everything__fly__content">
                <h4 className="everything__text">
                  {everythingFlySection?.heading}
                </h4>
                <h1 className="everythingfly__text">
                  {everythingFlySection?.boldHeading}
                </h1>
                <h5 className="fly__description">
                  {everythingFlySection?.description}
                </h5>
                <Box className="herobuttons__wrap">
                  {everythingFlySection?.ButtonLayout?.button?.map(
                    (item, idx) => (
                      <a
                        href={item?.to}
                        target="_blank"
                        rel="noreferrer"
                        key={idx + item}
                      >
                        <Button
                          backgroundcolor={
                            item?.buttonBackground || "var(--yellowPrimary)"
                          }
                          color={item?.buttonColor || "var(--whitePrimary)"}
                        >
                          {item?.text}
                        </Button>
                      </a>
                    )
                  )}
                </Box>
              </Box>
              <img
                src={everythingFlySection?.backgroundMedia?.url}
                alt=""
                className="bgimage"
              />
            </Box>
          </Box>
        </Section>
      </MarketPlaceWrapper>
    </GeneralLayout>
  );
};

export default MarketPlace;
