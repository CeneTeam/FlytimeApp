// Mobile footer for the general layout

import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  FlytimeIcon,
  InstaIcon,
  SpotifyIcon,
  TwitterIcon,
} from "../../../../assets/images/layout/svgExports";
import { Box } from "../../../lib/Box/styles";
import { FooterStyles } from "./footer.styles";

const Footer = ({ noFullFooter }) => {
  return (
    <FooterStyles noFullFooter={noFullFooter}>
      <div className="flytime__icon">
        <FlytimeIcon color={"var(--whitePrimary)"} width={120} height={100} />
      </div>
      <Box className="links__wrap">
        <span>
          <Link href="/t&c">Terms and Conditions</Link>
        </span>
        <Box className="icons__wrap">
          <a
            href="https://en-gb.facebook.com/flytimemusicfestival/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/flytimefest"
            target="_blank"
            rel="noreferrer"
          >
            <InstaIcon color="#fff" />
          </a>
          <a
            href="https://mobile.twitter.com/flytimefest"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon color="#fff" />
          </a>
          <a
            href="https://open.spotify.com/playlist/1Y1yLUBX1ywbK0gLcGp5WQ?si=OYPL_HNDRTSRqoj698c_Ig"
            target="_blank"
            rel="noreferrer"
          >
            <SpotifyIcon color="#fff" />
          </a>
        </Box>
        <span>
          <Link href="/contact-us">Contact Us</Link>
        </span>
      </Box>
    </FooterStyles>
  );
};

export default Footer;
