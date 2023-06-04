import { useEffect, useRef, useContext } from "react";
import { LayoutWrap, SignupModal } from "./generalLayout.styles";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import { Box } from "../../lib/Box/styles";
import { gsap } from "gsap";
import { FlytimeIcon } from "../../../assets/images/layout/svgExports";
import { MainContext } from "../../../context";
import { GET_TICKETS } from "../../../context/types";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const GeneralLayout = ({ noFullFooter, children }) => {
  const {
    dispatch,
    state: { getTickets },
  } = useContext(MainContext);
  const parent = useRef();
  const { asPath } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      var x = (document.querySelector("body").style.overflow = "visible");
    }, 2200);

    const ctx = gsap.context(() => {
      gsap.to(".cover", {
        delay: 3,
        duration: 0.5,
        opacity: 0,
        display: "none",
      });
    }, parent);
  }, []);

  const hideSignup = () => {
    dispatch({ type: GET_TICKETS, payload: undefined });
  };

  return (
    <LayoutWrap ref={parent} getTickets={getTickets}>
      <Box className="cover">
        <Box alignItems="flex-end">
          <FlytimeIcon width={200} />
        </Box>
      </Box>

      <Header />

      <Box className="signup__modal">
        <section className="overLay" onClick={hideSignup}></section>
        <span onClick={hideSignup} className="close__icon">
          <AiOutlineClose />
        </span>

        <div
          className="ctct-inline-form"
          data-form-id="28951cb5-d60c-4cb6-9b47-1cdaf7dbb7ea"
        ></div>
      </Box>

      <main className="general__layout__main">{children}</main>
      <Footer noFullFooter={noFullFooter} />

      <SignupModal
        open={getTickets}
        onCancel={hideSignup}
        footer={false}
      ></SignupModal>
    </LayoutWrap>
  );
};

export default GeneralLayout;
