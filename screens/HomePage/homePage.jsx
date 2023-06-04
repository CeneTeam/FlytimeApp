import React, { useState, useContext } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import { HomePageWrapper } from "./homePage.styles";
import ReactPlayer from "react-player/lazy";
import {
  AiFillAudio as Play,
  AiOutlineAudioMuted as Pause,
} from "react-icons/ai";
import Button from "../../components/lib/Button";
import { useCountdown } from "../../utils/hooks/countdown";
import { MainContext } from "../../context";
import { GET_TICKETS } from "../../context/types";
import FaqSection from "./Sections/home-faq";
import AboutSection from "./Sections/home-about";
import LineupSection from "./Sections/home-lineup";
import { useQuery } from "@tanstack/react-query";
import { getLineupCardsData } from "../../network/lineup";
import { getHomaPageData } from "../../network/homepage";

const HomePage = () => {
  const [muteVideo, setMuteVideo] = useState(true);
  const [days, hours, minutes, seconds] = useCountdown();
  const { dispatch } = useContext(MainContext);
  const { data } = useQuery(["homepage"], getHomaPageData);
  const { data: lineupCardsData } = useQuery(
    ["lineupcards"],
    getLineupCardsData
  );
  const heroData = data && data?.PostLayout[0];

  const handleGetTickets = () => {
    dispatch({ type: GET_TICKETS, payload: true });
  };

  return (
    <GeneralLayout>
      <HomePageWrapper>
        <Section className="hero__section">
          <Box
            width="unset"
            onClick={() => setMuteVideo(!muteVideo)}
            className="audioicon__wrap"
            alignItems="baseline"
          >
            {!!muteVideo ? <Play /> : <Pause />}{" "}
            <div className="mobile__watchtext__wrap">
              <p className="mobile__watchtext"> Watch Video</p>
            </div>
          </Box>
          <Box className="video__wrap">
            {heroData?.backgroundMedia?.url && (
              <ReactPlayer
                url={heroData?.backgroundMedia?.url}
                width={"100%"}
                height={"100%"}
                playing={true}
                playsInline={true}
                loop={true}
                muted={muteVideo}
              />
            )}
          </Box>

          <Box className="herotext__section">
            <h2 className="hero__header">
              <span>{heroData?.boldHeading}</span> {heroData?.heading}
            </h2>
            <h5 className="hero__subheader">{heroData?.description}</h5>

            <Box className="herobuttons__wrap">
              {heroData?.ButtonLayout?.button?.map((item, idx) => (
                <React.Fragment key={idx}>
                  {!item?.to ? (
                    <Button
                      backgroundcolor={
                        item?.buttonBackground || "var(--purplePrimary)"
                      }
                      color={item?.buttonColor || "var(--whitePrimary)"}
                      onClick={handleGetTickets}
                    >
                      {item.buttonText}
                    </Button>
                  ) : item?.to?.includes("https") ? (
                    <a
                      href={item?.to}
                      target="_blank"
                      rel="noreferrer"
                      key={idx + item}
                      hoverColor="#fff"
                    >
                      <Button
                        backgroundcolor={
                          item?.buttonBackground || "var(--yellowPrimary)"
                        }
                        color={item?.buttonColor || "var(--whitePrimary)"}
                        width="190px"
                        height="55px"
                        fontSize="15px"
                      >
                        {item?.buttonText}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      backgroundcolor={
                        item?.buttonBackground || "var(--purplePrimary)"
                      }
                      color={item?.buttonColor || "var(--whitePrimary)"}
                      onClick={() => router.push(item?.to)}
                      width="190px"
                      height="55px"
                      fontSize="15px"
                      hoverColor="#fff"
                    >
                      {item?.buttonText}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </Box>
            {/* <Box className="date__wrap">
              <h3 className="date__countdown">
                {days >= 1 ? days : "0"}
                <br />
                <span>DAYS</span>
              </h3>
              <h3 className="date__countdown">
                {hours >= 1 ? hours : "0"}
                <br />
                <span>HRS</span>
              </h3>
              <h3 className="date__countdown">
                {minutes >= 1 ? minutes : "0"}
                <br />
                <span>MINS</span>
              </h3>
              <h3 className="date__countdown">
                {seconds >= 1 ? seconds : "0"}

                <br />
                <span>SECS</span>
              </h3>
            </Box> */}
          </Box>
        </Section>

        {/* lineup */}
        {lineupCardsData?.status === "published" && (
          <LineupSection
            lineupSectionData={data && data?.PostLayout[1]}
            lineupCardsData={lineupCardsData}
          />
        )}

        {/* About */}
        <AboutSection
          aboutSectionData={data && data?.PostLayout[2]}
          mobileFlytimeLogo={heroData?.flytimeLogo}
        />

        {/* faqs */}

        <FaqSection />
      </HomePageWrapper>
    </GeneralLayout>
  );
};

export default HomePage;
