import React from "react";
import { Box } from "../../../components/lib/Box/styles";
import { AboutWrapper } from "../homePage.styles";
import Button from "../../../components/lib/Button";
import { NigeriaIcon } from "../../../assets/images/layout/svgExports";
import DaysLineup from "../../../components/lib/DaysLineup/daysLineup";
import ToTheWorld from "../../../components/lib/ToTheWorld/toTheWorld";
import { useRouter } from "next/router";
import Sponsors from "../../../components/lib/Sponsors/sponsors";

const AboutSection = ({ aboutSectionData, mobileFlytimeLogo }) => {
  const router = useRouter();

  return (
    <AboutWrapper>
      <Sponsors />
      <Box className="about__body">
        <ToTheWorld absoluteMobile />
        <Box className="fest__image">
          <img
            src={aboutSectionData?.flytimeLogo?.url}
            alt=""
            className="festimage__web"
          />

          <img
            src={mobileFlytimeLogo?.url}
            alt=""
            className="festimage__mobile"
          />
        </Box>

        <Box className="about__textsection">
          <Box className="abouttext__wrap__main">
            <h2 className="about__header">
              {aboutSectionData?.heading}
              <span>{aboutSectionData?.boldHeading}!</span>
            </h2>
            <h2 className="about__header__colored">
              {aboutSectionData?.subHeading}
            </h2>
            <h5 className="about__subheader">
              {aboutSectionData?.description}
            </h5>
            {aboutSectionData?.ButtonLayout?.button?.map((item, idx) => (
              <Button
                backgroundcolor={
                  item?.buttonBackground || "var(--purplePrimary)"
                }
                color={item?.buttonColor || "var(--whitePrimary)"}
                onClick={() => router.push(item.buttonLink)}
                key={idx}
              >
                {item.buttonText}
                <NigeriaIcon width={20} />
              </Button>
            ))}
          </Box>

          <Box className="flytime__people">
            <img src={aboutSectionData?.backgroundMedia?.url} alt="" />
          </Box>
          <Box className="about__flower__web">
            <img src={aboutSectionData?.webFlower?.url} alt="" />
          </Box>
          <Box className="about__flower__mobile">
            <img src={aboutSectionData?.mobileFlower?.url} alt="" />
          </Box>
        </Box>
      </Box>
      <DaysLineup />
    </AboutWrapper>
  );
};

export default AboutSection;
