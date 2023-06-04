import React, { useState, useRef, useEffect } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import { AboutUsWrapper, ProgressBarWrapper } from "./aboutus.styles";
import { FlytimeIcon } from "../../assets/images/layout/svgExports";
import DaysLineup from "../../components/lib/DaysLineup/daysLineup";
import ToTheWorld from "../../components/lib/ToTheWorld/toTheWorld";
import FlashbackCard from "./Sections/YearCard/yearCard";
import BackgroundFlowers from "./Sections/FLowers/bgFlowers";
import { useRouter } from "next/router";
import {
  getAboutCarouselData,
  getAboutPageData,
  getFlashbackYears,
} from "../../network/about";
import { useQuery } from "@tanstack/react-query";

const AboutUs = ({}) => {
  const { data: carouselData } = useQuery(
    ["carouseldata"],
    getAboutCarouselData
  );
  const { data: aboutData } = useQuery(["aboutdata"], getAboutPageData);
  const { data: flashbackYears } = useQuery(
    ["flashbackyears"],
    getFlashbackYears
  );
  const [progressWidth, setrogressWidth] = useState("33");
  const heroBodyCardsRef = useRef(null);
  const router = useRouter();
  const aboutBodyData = aboutData && aboutData?.PostLayout[0];

  useEffect(() => {
    let flashbackIdsList = [];
    flashbackYears?.PostLayout?.map((items) => {
      flashbackIdsList = [...flashbackIdsList, ...items?.buttonActions];
    });
    localStorage.setItem("flashbackIdsList", JSON.stringify(flashbackIdsList));
  }, [flashbackYears]);

  const onHeroCardCardScroll = () => {
    if (heroBodyCardsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = heroBodyCardsRef.current;
      const totalDocScrollLength = scrollWidth - clientWidth;
      const scrollPostion = Math.floor(
        (scrollLeft / totalDocScrollLength) * 100
      );

      if (scrollPostion <= 33) {
        setrogressWidth("33");
      } else if (scrollPostion > 33 && scrollPostion <= 66) {
        setrogressWidth("66");
      } else if (scrollPostion > 66) {
        setrogressWidth("100");
      }
    }
  };

  return (
    <GeneralLayout>
      <AboutUsWrapper>
        <Section className="about__hero__section">
          <Box className="about__hero__headerwrap">
            <Box className="about__hero__header">
              <div className="fluterwave__icon__wrap">
                <FlytimeIcon color="#36CE4F" />
              </div>
              <Box className="about__hero__header__textwrap">
                <Box className="about__hero__header__textmain">
                  <h2 className="about__hero__header__text">
                    <span>{aboutBodyData?.boldHeading}</span>{" "}
                    {aboutBodyData?.heading}
                  </h2>
                  <h5 className="about__hero__header__subtext">
                    {aboutBodyData?.subHeading}
                  </h5>
                </Box>
                <div className="flytime__icon__wrap ">
                  <FlytimeIcon color="#36CE4F" />
                </div>
              </Box>

              <Box className="hero__header__mobile__flower">
                <img src={carouselData?.postImage?.url} alt="" />
              </Box>
            </Box>
          </Box>

          <ToTheWorld horizontal noweb />

          <Box className="about__hero__body">
            <Box className="hero__body__content">
              <h5 className="swipe__text">Swipe to see more</h5>
              <Box
                className="about__hero__carousel"
                ref={heroBodyCardsRef}
                onScroll={onHeroCardCardScroll}
              >
                <Box className="about__cardwrap__sub">
                  {carouselData?.PostLayout.map((item, idx) => (
                    <Box
                      className="about__hero__card"
                      margin={idx === 1 ? "0 50px" : "0"}
                      key={idx + "random"}
                      backgroundcolor={item.color}
                    >
                      <Box className="card__image">
                        <img src={item?.image?.url} alt="" />
                      </Box>

                      <h4
                        className="card__route__text"
                        onClick={() => router.push(item.route)}
                      >
                        {item.title}
                      </h4>
                    </Box>
                  ))}
                </Box>
              </Box>
              <ProgressBarWrapper justifyContent="flex-start">
                <Box
                  className="progressbar__inner"
                  width={`${progressWidth}%`}
                ></Box>
              </ProgressBarWrapper>
            </Box>

            <Box className="flower__wrap__web">
              <img
                src={carouselData?.postImage?.url}
                alt=""
                className="flower__image__web"
              />
            </Box>
            <Box className="flower__wrap__mobile">
              <img
                src={aboutBodyData?.webFlower?.url}
                alt=""
                className="card__mobile__flower__left"
              />
              <img
                src={aboutBodyData?.webFlower?.url}
                alt=""
                className="card__mobile__flower__right"
              />
            </Box>
            <DaysLineup />
          </Box>
        </Section>

        <Section className="flashback__section">
          <h2 className="flashback__header__text">
            <span id="recent-year">FLASHBACK</span>
          </h2>
          <h5 className="flashback__header__subtext">
            {aboutBodyData?.description}
          </h5>

          {flashbackYears?.PostLayout?.map((data, idx) => (
            <FlashbackCard data={data} key={idx + "okay"} dataIndex={idx} />
          ))}

          <BackgroundFlowers
            leftFlower={aboutBodyData?.webFlower?.url}
            rightFlower={aboutBodyData?.mobileFlower?.url}
          />
        </Section>
      </AboutUsWrapper>
    </GeneralLayout>
  );
};

export default AboutUs;
