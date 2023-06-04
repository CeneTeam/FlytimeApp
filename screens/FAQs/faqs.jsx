import React, { useState, useEffect } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import { FAQWrapper } from "./faqs.styles";
import { FlytimeIcon } from "../../assets/images/layout/svgExports";
import DaysLineup from "../../components/lib/DaysLineup/daysLineup";
import { HiPlusSm as OpenFaq } from "react-icons/hi";
import { getFaqData } from "../../network/faq";
import { useQuery } from "@tanstack/react-query";
import { getLineupPageData } from "../../network/lineup";

const FAQ = () => {
  const { data: faqData } = useQuery(["faqs"], getFaqData);
  const { data: faqFlowers } = useQuery(["faqflowers"], getLineupPageData);
  const [activeTab, setActiveTab] = useState("General");
  const [activeFaqList, setActiveFaqList] = useState();
  const [activeFaq, setActiveFaq] = useState("");

  const faqHeaderFlowers = faqFlowers && faqFlowers?.PostLayout[0];

  useEffect(() => {
    const currentFaq = faqData?.PostLayout?.find(
      ({ title }) => title === activeTab
    );
    setActiveFaqList(currentFaq?.faqItems?.Items);
  }, [faqData]);

  const getActiveFaq = (item) => {
    const currentFaq = faqData?.PostLayout.find(({ title }) => title === item);
    setActiveFaqList(currentFaq?.faqItems.Items);
    setActiveTab(item);
  };

  const handleFaqSlab = (item) => {
    if (activeFaq === item) {
      setActiveFaq("");
    } else {
      setActiveFaq(item);
    }
  };

  return (
    <GeneralLayout>
      <FAQWrapper>
        <Section className="faq__header__section">
          <img
            src={faqHeaderFlowers?.webFlower?.url}
            alt=""
            className="header__flower header__flower__web"
          />
          <img
            src={faqHeaderFlowers?.mobileFlowerLeft?.url}
            alt=""
            className="header__flower header__flower__mobile__left"
          />

          <img
            src={faqHeaderFlowers?.mobileFlowerRight?.url}
            alt=""
            className="header__flower header__flower__mobile__right"
          />
          <Box className="header__innerwrap">
            <FlytimeIcon color="var(--whitePrimary)" width="150" />
            <h1 className="header__text">FAQs</h1>
          </Box>
        </Section>
        <DaysLineup />
        <Section className="tab__section">
          <Box className="tab__faq__main">
            {faqData?.PostLayout?.map((item, idx) => (
              <Box
                key={idx}
                className="tab__faq__item"
                onClick={() => getActiveFaq(item?.title)}
                backgroundcolor={
                  activeTab === item?.title ? "var(--purplePrimary)" : ""
                }
              >
                <h5 className="faq__tab__text">{item?.title}</h5>
              </Box>
            ))}
          </Box>
        </Section>
        <Section className="body__section">
          <Box className="body__text__wrap">
            <h className="body__text">{faqData?.postMeta?.keyWords}</h>
          </Box>
          <Box className="faq__listwrap">
            {activeFaqList?.map((item, idx) => (
              <Box
                className={
                  item.answers.length > 1 ? "faqslab firstslab" : "faqslab"
                }
                id={activeFaq === item.question ? "activeFaq" : ""}
                backgroundcolor={item.color}
                key={idx + "hi"}
                height={
                  activeFaq === item.question
                    ? item.height
                    : item.slabCloseHeight || "70px"
                }
                justifyContent={
                  activeFaq === item.question ? "flex-start" : "center"
                }
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
                    {item.answers.slice(0, 2).map((itemanswers, index) => (
                      <Box className="faq__answeritem" key={index + "hey"}>
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
                                itemanswers.to || `mailto: ${itemanswers.link}`
                              }
                              target="_blank"
                              rel="noreferrer"
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
        </Section>
        <Box className="faq__flowers">
          <img src={faqData?.postImage?.url} alt="" />
          <img src={faqData?.postImage?.url} alt="" />
          <img src={faqData?.postImage?.url} alt="" />
        </Box>
      </FAQWrapper>
    </GeneralLayout>
  );
};

export default FAQ;
