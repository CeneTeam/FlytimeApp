import React, { useState } from "react";
import { Box } from "../../../components/lib/Box/styles";
import { FaqsWrapper } from "../homePage.styles";
import { HiPlusSm as OpenFaq } from "react-icons/hi";
import { getFaqData } from "../../../network/faq";
import { useQuery } from "@tanstack/react-query";

const FaqSection = () => {
  const { data: faqData } = useQuery(["faqa"], getFaqData);
  const [activeFaq, setActiveFaq] = useState("");

  const handleFaq = (item) => {
    if (activeFaq === item) {
      setActiveFaq("");
    } else {
      setActiveFaq(item);
    }
  };

  return (
    <FaqsWrapper>
      <Box className="faq_flower__wrap">
        <img src={faqData?.postImage?.url} alt="" />
      </Box>

      <Box className="faq_textsecton">
        <h1 className="faq__mainheader">FAQs</h1>
        <Box className="faq__listwrap">
          {faqData?.PostLayout[0]?.faqItems?.Items.slice(0, 4).map(
            (item, idx) => (
              <Box
                className={
                  item.answers.length > 1 ? "faqslab firstslab" : "faqslab"
                }
                id={activeFaq === item.question ? "activeFaq" : ""}
                backgroundcolor={item.color}
                key={idx + "kudos"}
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
                    onClick={() => handleFaq(item.question)}
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
            )
          )}
        </Box>
      </Box>
    </FaqsWrapper>
  );
};

export default FaqSection;
