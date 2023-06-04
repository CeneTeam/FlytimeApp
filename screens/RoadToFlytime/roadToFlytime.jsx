import React, { useEffect, useState } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import Button from "../../components/lib/Button";
import Sponsors from "../../components/lib/Sponsors/sponsors";
import ToTheWorld from "../../components/lib/ToTheWorld/toTheWorld";
import {
  MapSectionWrapper,
  RoadToFlytimeWrapper,
  TravelFaqWrapper,
} from "./roadToFlytime.styles";
import { HiPlusSm as OpenFaq } from "react-icons/hi";
import { getFaqData } from "../../network/faq";
import { useQuery } from "@tanstack/react-query";
import { getTravelData } from "../../network/travel";

const RoadToFlytime = () => {
  const { data: faqData } = useQuery(["faqstravel"], getFaqData);
  const [activeFaq, setActiveFaq] = useState("");
  const [activeFaqList, setActiveFaqList] = useState();
  const { data: travel } = useQuery(["traveldata"], getTravelData);

  const heroSection = travel && travel?.PostLayout[0];
  const mapSection = travel && travel?.PostLayout[1];
  const travelFaqSection = travel && travel?.PostLayout[2];

  useEffect(() => {
    const currentFaq = faqData?.PostLayout.find(
      ({ title }) => title === "Getting Here"
    );
    setActiveFaqList(currentFaq?.faqItems?.Items);
  }, [faqData]);

  const handleFaqSlab = (item) => {
    if (activeFaq === item) {
      setActiveFaq("");
    } else {
      setActiveFaq(item);
    }
  };

  return (
    <GeneralLayout noFullFooter>
      <RoadToFlytimeWrapper>
        <Section className="travel__header__section">
          <Box className="header__flowers__web ">
            <img src={heroSection?.webFlower?.url} alt="" />
          </Box>
          <Box className="header__flowers__mobile">
            <img
              src={travel?.postImage?.url}
              alt=""
              className="header__flower"
            />
          </Box>
          <Box className="header__innerwrap">
            <h5 className="travel__subheader__text">
              {heroSection?.subHeading}
            </h5>
            <h2 className="travel__header__text">
              <span>{heroSection?.heading}</span>
            </h2>
            <Box className="header__buttons__wrap">
              {heroSection?.ButtonLayout?.button?.map((item, idx) => (
                <>
                  {item?.to?.includes("https") ? (
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
                </>
              ))}
            </Box>
          </Box>
        </Section>
        <Sponsors backgroundColor={"#FDBF00"} />

        <MapSectionWrapper>
          <h3 className="mapsection__header">{mapSection?.heading}</h3>
          <h5 className="mapsection__address__text">
            {mapSection?.subHeading}
          </h5>
          <h5 className="mapsection__address__main">
            {mapSection?.description}
          </h5>

          <Box className="google__map">
            <iframe
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API}
    &q=Eko+Hotel+Suites, Lagos`}
            ></iframe>
          </Box>

          <Box className="mapsection__flowers__web ">
            <img
              src={travel?.postImage?.url}
              alt=""
              className="header__flower"
            />
          </Box>
        </MapSectionWrapper>
        <TravelFaqWrapper>
          <Box className="travelfaq__body">
            <ToTheWorld
              absoluteMobile
              backgroundColor={"var(--greenPrimary)"}
            />
            <Box className="fest__image">
              <img
                src={travelFaqSection?.flytimeLogo?.url}
                alt=""
                className="festimage__web"
              />

              <img
                src={travelFaqSection?.mobileFlower?.url}
                alt=""
                className="festimage__mobile"
              />
            </Box>

            <Box className="travelfaq__textsection">
              <Box className="travelfaqtext__wrap__main">
                <Box className="text__left">
                  <h2 className="travelfaq__header">
                    {travelFaqSection?.heading}{" "}
                    <span>{travelFaqSection?.boldHeading}</span>
                  </h2>

                  <h5 className="travelfaq__subheader">
                    {travelFaqSection?.subHeading}
                    <br /> <br />
                    {travelFaqSection?.description}
                  </h5>
                  {travelFaqSection?.ButtonLayout?.button?.map((item, idx) => (
                    <>
                      {item?.to?.includes("https") ? (
                        <a
                          href={item?.to}
                          target="_blank"
                          rel="noreferrer"
                          key={idx + item}
                        >
                          <Button
                            backgroundcolor={
                              item?.buttonBackground || "var(--greenPrimary)"
                            }
                            color={item?.buttonColor || "var(--whitePrimary)"}
                            width="190px"
                            height="55px"
                            fontSize="15px"
                            hoverColor="#fff"
                          >
                            {item?.buttonText}
                          </Button>
                        </a>
                      ) : (
                        <Button
                          backgroundcolor={
                            item?.buttonBackground || "var(--greenPrimary)"
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
                    </>
                  ))}
                </Box>
                <Box className="text__right">
                  {activeFaqList?.map((item, idx) => (
                    <Box
                      className={"faqslab"}
                      id={activeFaq === item.question ? "activeFaq" : ""}
                      key={idx + "hi"}
                    >
                      <h5 className="faq__question">{item.question}</h5>
                      {activeFaq !== item.question && (
                        <div
                          className="open__faq"
                          onClick={() => handleFaqSlab(item.question)}
                        >
                          <OpenFaq />
                        </div>
                      )}
                      {activeFaq === item.question && (
                        <Box className="faq__answelist">
                          {item.answers
                            .slice(0, 2)
                            .map((itemanswers, index) => (
                              <Box
                                className="faq__answeritem"
                                key={index + "hey"}
                              >
                                {itemanswers?.answerTitle && (
                                  <h5 className="answer__title">
                                    {itemanswers.answerTitle}
                                  </h5>
                                )}

                                <p className="answer__text">
                                  {itemanswers.answer}{" "}
                                  {itemanswers?.link && (
                                    <a
                                      href={
                                        itemanswers.to ||
                                        `mailto: ${itemanswers.link}`
                                      }
                                    >
                                      {itemanswers.link}
                                    </a>
                                  )}
                                </p>
                              </Box>
                            ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box className="travelfaq__flower">
                <img
                  src={travel?.postImage?.url}
                  alt=""
                  className="header__flower"
                />
              </Box>
            </Box>
          </Box>
        </TravelFaqWrapper>
      </RoadToFlytimeWrapper>
    </GeneralLayout>
  );
};

export default RoadToFlytime;
