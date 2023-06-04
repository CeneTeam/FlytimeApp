import { useQuery } from "@tanstack/react-query";
import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box } from "../../components/lib/Box/styles";
import { getContactData } from "../../network/contact";
import { ContactUsWrapper } from "./contactUs.styles";

const ContactUs = () => {
  const { data: contacts } = useQuery(["contactsdata"], getContactData);
  return (
    <GeneralLayout>
      <ContactUsWrapper>
        <h2 className="header__text email">
          EMAIL <span>US</span>
        </h2>
        <h5>
          General: <small>{contacts?.PostLayout[0]?.content}</small>
        </h5>
        <h5>
          Tickets: <small>{contacts?.PostLayout[1]?.content}</small>
        </h5>

        <h2 className="header__text call">
          CALL <span>US</span>
        </h2>
        <h5>{contacts?.PostLayout[2]?.content}</h5>

        <Box className="contact__flowers ">
          <img src={contacts?.postImage?.url} alt="" />
        </Box>
      </ContactUsWrapper>
    </GeneralLayout>
  );
};

export default ContactUs;
