import { useQuery } from "@tanstack/react-query";
import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box } from "../../components/lib/Box/styles";
import { getRulesData } from "../../network/flytime-rules";
import { FestivalRulesWrapper } from "./festivalRules.styles";

const FestivalRules = () => {
  const { data: rules } = useQuery(["rulesdata"], getRulesData);
  const flyRules = rules && rules?.PostLayout[0];

  return (
    <GeneralLayout>
      <FestivalRulesWrapper>
        <Box className="rules__subwrap">
          <h5 className="sub__header">{flyRules?.heading}</h5>
          <h2 className="header__text ">
            FESTIVAL <span>RULES</span>
          </h2>

          <h3 className="insructions">{flyRules?.subHeading}</h3>

          {flyRules?.Items?.map((item, idx) => (
            <React.Fragment key={idx}>
              <h3 className="item__number">{idx + 1}.</h3>
              <h3 className="insructions">{item?.text}</h3>
            </React.Fragment>
          ))}

          <Box className="rules__flowers ">
            <img src={rules?.postImage?.url} alt="" />
          </Box>

          <h5 className="sub__header footer">
            Our security team is present to make this concert experience safe
            and fun for everyone‭; ‬kindly cooperate‭, help us keep you safe.
          </h5>
        </Box>
      </FestivalRulesWrapper>
    </GeneralLayout>
  );
};

export default FestivalRules;
