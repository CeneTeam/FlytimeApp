import React, { useState } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import { LineupWrapper } from "./line-up.styles";
import { FlytimeIcon } from "../../assets/images/layout/svgExports";
import { lineupFlowers } from "../../utils/data-helpers/lineup";
import Sponsors from "../../components/lib/Sponsors/sponsors";
import { getLineupPageData } from "../../network/lineup";
import { useQuery } from "@tanstack/react-query";

const Lineup = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const { data: lineupPageData } = useQuery(["lineup"], getLineupPageData);

  const lineupData = lineupPageData && lineupPageData?.PostLayout[0];

  return (
    <GeneralLayout>
      <LineupWrapper>
        <Section className="lineup__header__section">
          <img
            src={lineupData?.webFlower?.url}
            alt=""
            className="header__flower header__flower__web"
          />
          <img
            src={lineupData?.mobileFlowerLeft?.url}
            alt=""
            className="header__flower header__flower__mobile__left"
          />

          <img
            src={lineupData?.mobileFlowerRight?.url}
            alt=""
            className="header__flower header__flower__mobile__right"
          />
          <Box className="header__innerwrap">
            <FlytimeIcon color="var(--whitePrimary)" width="150" />
            <h2 className="tandc__header__text">
              THE <span> LINEUP </span>
            </h2>
            <h5 className="header__year__text">{lineupData?.year}</h5>
          </Box>
        </Section>
        <Sponsors />

        <Section className="tab__section">
          <Box className="mobile__lineup">
            {lineupData?.tabs?.map((item, idx) => (
              <Box key={idx} className="mobile__lineup__item">
                <Box className="card__color" backgroundcolor={item.color}></Box>
                <h5 className="mobile__lineup__title">
                  {item.day} {item.activity}
                </h5>
              </Box>
            ))}
          </Box>

          <Box className="tab__lineup__wrap">
            <Box className="tab__lineup__main">
              {lineupData?.tabs?.map((item, idx) => (
                <Box
                  key={idx}
                  className="tab__lineup__item"
                  onClick={() => setActiveTab(item.day)}
                  backgroundcolor={activeTab === item.day ? item.color : ""}
                >
                  <h5 className="lineup__tab__date">
                    {item.day} <small>-</small> {item.date}
                  </h5>
                  <h5 className="lineup__tab__activity">{item.activity}</h5>
                </Box>
              ))}
            </Box>
            <h5 className="clear" onClick={() => setActiveTab("ALL")}>
              Clear
            </h5>
          </Box>
        </Section>

        <Section className="body__section">
          <Box className="cards__wrap">
            {lineupData?.lineupArtists?.map((item, idx) =>
              activeTab === "ALL" ? (
                <Box
                  key={idx}
                  backgroundcolor={item.color || "var(--bluePrimary)"}
                  className="artist__card"
                >
                  <div className="artist__image__wrap">
                    <img src={item?.artistImage?.url} alt="" />
                  </div>
                  <h5 className="artist__name">{item.artist}</h5>
                </Box>
              ) : (
                (item.day === activeTab ||
                  (activeTab === "DAY 3" && item.secondDay === "DAY 3")) && (
                  <Box
                    key={idx}
                    backgroundcolor={
                      activeTab === "DAY 3" && item.secondDayColor
                        ? item.secondDayColor
                        : item.color || "var(--bluePrimary)"
                    }
                    className="artist__card"
                  >
                    <div className="artist__image__wrap">
                      <img src={item?.artistImage?.url} alt="" />
                    </div>
                    <h5 className="artist__name">{item.artist}</h5>
                  </Box>
                )
              )
            )}
          </Box>
        </Section>
        {lineupPageData?.postImage?.url && (
          <Box className="lineup__flowers">
            {lineupFlowers.map((item, idx) => (
              <img
                src={lineupPageData?.postImage?.url}
                key={idx}
                alt=""
                style={{
                  transform: idx % 2 === 0 ? "scaleX(-1)" : "scaleX(1)",
                }}
              />
            ))}
          </Box>
        )}
      </LineupWrapper>
    </GeneralLayout>
  );
};

export default Lineup;
