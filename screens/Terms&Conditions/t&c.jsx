import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout/generalLayout";
import { Box, Section } from "../../components/lib/Box/styles";
import { TermsAndConditionsWrapper } from "./t&c.styles";
import { FlytimeIcon } from "../../assets/images/layout/svgExports";
import { staticBaseUrl } from "../../network/static";

const TermsAndConditions = () => {
  return (
    <GeneralLayout>
      <TermsAndConditionsWrapper>
        <Section className="header__section">
          <img
            src={`${staticBaseUrl}line-up-flower.svg`}
            alt=""
            className="header__flower"
          />

          <Box className="header__innerwrap">
            <FlytimeIcon color="var(--blackPrimary)" width="150" />
            <h2 className="tandc__header__text">
              <span>TERMS & </span> CONDITIONS
            </h2>
          </Box>
        </Section>

        <Section className="body__section">
          <h5 className="body__header">
            FLUTTERWAVE FLYTIME FESTIVAL TERMS AND CONDITIONS EFFECTIVE FROM
            21ST DECEMBER 2022.
          </h5>
          <p className="body__text">
            Please take note of the following Term and Conditions (“<b>Terms</b>
            ” or “<b>Agreement</b>&ldquo;) as they affect your legal rights and
            activities during the FLUTTERWAVE FLYTIME FEST. (The “Event/Show”).{" "}
          </p>
          <h5 className="body__header">Wristband Terms of Use</h5>
          <p className="body__text">
            All Attendees in possession of the Event wristbands are subject to
            these Terms. Note that Each wristband assigned to an Attendee binds
            the Attendee to all Terms and Conditions stated herein and Attendee
            agrees to be lawfully bound to comply with these terms. Flytime
            reserves the right, at its discretion, to change, modify, add, or
            remove portions of these Terms at any time.{" "}
            <b>Please check back periodically for changes.</b> All Attendees are
            expected to be in possession of their individual FLUTTERWAVE FLYTIME
            FEST wristbands as the wristbands shall be a mode of access into the
            show. <br /> <br />
            Each wristband grants access to the Attendee’s designated Zone
            during the show. Consequently, Attendees&ldquo; movements are
            limited to their respective designated zones as indicated on the
            wristband.
            <br /> <br />
            A VVIP wristband does not grant access to the VIP Floor and vice
            versa.
            <br /> <br />
            Any violation of the wristband terms above stated shall warrant
            Attendee&ldquo;s immediate removal from the show.
            <br /> <br />
          </p>

          <h5 className="body__header">UNAUTHORIZED TRANFERS PROHIBITED</h5>

          <p className="body__text">
            Each FLUTTERWAVE FLYTIME wristband is for use by the authorized
            purchaser with unique QR code received by an Attendee following
            purchase of a ticket for the show. Consequently, wristbands are not
            transferable and cannot be switched between Attendees or any person.
            All tickets purchased must be from Flytime Fest or the Concierge
            Company. All and any wristbands obtained from unauthorized sources
            are deemed counterfeit, and worthless and shall warrant
            denial/cancellation to its possessor. <br />
            <br />
            No sponsorship, on-site marketing, sampling, vending, coupon/product
            distribution, or other promotional activity may be conducted at the
            Event (inclusive of parking lots), absent Flytime’s prior written
            approval in each instance.
            <br />
            <br />
            Resale or attempted resale of Wristbands is grounds for termination
            of the license and cancellation of the Wristband.
          </p>

          <h5 className="body__header">
            AUTHORIZATION OF ATTENDEE’S IMAGE AND LIKENESS{" "}
          </h5>

          <p className="body__text">
            Attendees grant the Flytime the option to incorporate Attendee’s
            picture, resemblance, activities, and proclamations in any live or
            recorded sound, photo, video, film, webcast, transfer, or other
            transmission, display, simulcast, or generation made of, or at, the
            show in any medium or setting
          </p>

          <h5 className="body__header">
            OWNERSHIP AND USE OF THE EVENT’S INTELLECTUAL PROPERTY{" "}
          </h5>

          <p className="body__text">
            All intellectual property in the FLUTTERWAVE FLYTIME FEST is owned
            by FLYTIME and any infringing party shall be legally redressed
            without hesitation.
          </p>

          <h5 className="body__header">
            NO LIVE AUDIO, VIDEO STREAMING OR BROADCASTS
          </h5>

          <p className="body__text">
            FLYTIME owns all Streaming rights in the Event. Any live streams or
            broadcasts from the Event must be specifically agreed to in advance
            with FLYTIME and as such there shall be no live streaming or
            broadcast without FLYTIME ’s prior written permission.
          </p>

          <h5 className="body__header">
            AUDIO AND/OR VIDEO RECORDINGS AND RELATED EQUIPMENT
          </h5>

          <p className="body__text">
            Attendees must not bring any audio or video recording devices
            (except for personal cell phones) into the event except for
            non-commercial, photography devices.
          </p>

          <h5 className="body__header">
            PHOTOGRAPHY AND VIDEO / EQUIPMENT ATTENDEE MAY NOT MAKE ANY
            COMMERCIAL USE OF ANY PERSONAL CONTENT WITHOUT THE PRIOR WRITTEN
            PERMISSION OF THE FLYTIME.
          </h5>

          <p className="body__text">
            Flytime reserves the right to prohibit any use of Personal Content
            which it believes is in violation of the Terms. Flytime in its sole
            discretion may determine what constitutes a commercial use not
            permitted by the Terms.
          </p>

          <h5 className="body__header">ASSIGNMENT OF COPYRIGHTS</h5>

          <p className="body__text">
            Attendee assigns to Flytime the exclusive ownership to Attendee’s
            Personal Content taken at the event by Attendee. Flytime may execute
            any assignment documents on Attendee’s behalf as necessary to
            perfect Flytime’s ownership, and Attendee grants Flytime Attendee’s
            Power of Attorney to execute any such documents for Attendee.
            Attendee further acknowledges, agrees to, and consents to Flytime
            registering the copyright with one or more copyright authorities.
            <br />
            <br />
            Flytime assigns to Attendee the non-exclusive right to use
            Attendee’s Personal Content for Attendee’s own direct,
            noncommercial, use as permitted in the Terms. All other rights not
            assigned by Flytime to Attendee are retained by Flytime.
          </p>
          <h5 className="body__header">
            ARTISTS AND SAID TIME SUBJECT TO CHANGE
          </h5>

          <p className="body__text">
            Event Artists and set times are subject to change without notice.
          </p>
          <h5 className="body__header">MEDICAL CONSENT</h5>

          <p className="body__text">
            Attendee agrees to have medical treatment that may be deemed
            advisable in the event of an injury, accident, or illness during the
            Event and hereby releases the Flytime and all persons participating
            in such medical treatment from all liability for any such actions.
          </p>

          <h5 className="body__header">CONSENT TO SEARCH</h5>

          <p className="body__text">
            All Attendees and their belongings shall be upon entry into the
            Event. Attendee consents to such searches and waives any related
            claims that might arise against Flytime and its agent. Any Attendee
            who elects not to consent to such searches may be denied entry into
            the Event.
          </p>

          <h5 className="body__header">
            ASSUMPTION OF RISK, WAIVER & LIMITATION OF LIABILITY
          </h5>

          <p className="body__text">
            <b>
              <i>Assumption of Risk:</i>
            </b>{" "}
            Attendee understands that there may be certain risks of individual
            or property injury, sickness and/or death related to going to the
            Show which include but are not limited to the novel coronavirus
            SARS-CoV-2 and any resulting disease (along with any change and/or
            variety thereof, &ldquo;<b>Coronavirus</b>&ldquo;). Attendee
            understands and agrees <br />
            <br />
            (a) that the risk of contracting Coronavirus cannot be completely
            eliminated and is increased by proximity to other people, <br />
            <br />
            (b) that in any public place or place where people are gathered
            there is possible risk of exposure to Coronavirus, <br />
            <br />
            (c) that attending the Show presents a likelihood that you may come
            into close contact with people, <br />
            <br />
            (d) that there is no guarantee that Attendee will not be exposed to
            Coronavirus and (e) that exposure to Coronavirus presents a
            likelihood of being subject to isolation requirements, sickness, and
            other health issues, including death.
            <br />
            <br />
            Attendee voluntarily assumes ALL known and potential risks and
            danger of injury and/or death from any cause, resulting from, in
            connection with, or incidental to the Event, including exposure to
            COVID-19. By accepting these Terms, Attendee expressly assumes all
            risks and dangers arising from or incidental to the Event, whether
            such risks occur before, during, or after the Event and agrees that
            the FLYTIME is not responsible for any such risks and dangers.
            <br />
            <br />
            <b>
              <i>Waiver:</i>
            </b>{" "}
            Attendee forever releases, waives, discharges and agrees not to sue
            the following: Flytime(s); Event promoter(s); Event performers,
            artists and their managers, agents, furnishing companies and
            representatives; the Event ticketing agency and/or ticketing
            services provider; from any known or unknown claims, losses,
            damages, liability, demands, actions, injury or death, including
            those relating to COVID-19 or any other illness or injury that
            Attendee may sustain while at the Event, regardless of whether
            caused by the negligence or other fault of the Releasees or any
            third party (collectively, “<b>Claims</b>” or, as used individually,
            a “<b>Claim</b>”).
          </p>
          <h5 className="body__header">
            INDIVIDUAL ARBITRATION AGREEMENT AND CLASS ACTION WAIVER
            (ÁRBITRATION AGREEMENT”)
          </h5>

          <p className="body__text">
            This Arbitration Agreement shall be governed by the Arbitration and
            Conciliation Act (Laws of the Federation of Nigeria 2004 Cap A18)
            <br />
            <br />
            If any dispute arises as to the validity, interpretation, effect or
            rights and obligations of the Parties under this Agreement, the
            Parties shall resort to mediation by referring the matter to the
            Lagos Multi-Door Court House. If the dispute is not resolved by
            mediation within two weeks after the dispute is declared by either
            party, the dispute shall be finally resolved by Arbitration in
            accordance with the Arbitration and Conciliation Act, Cap A18, Laws
            of the Federation of Nigeria, 2004. The arbitral panel shall consist
            of a single arbitrator appointed by the mutual written agreement of
            both Parties or failing such agreement within fourteen (14) days of
            notification of the dispute by either Party to the other then by the
            Chairman of the Chartered Institute of Arbitrators UK (Nigeria
            Branch). The language of the arbitration shall be English. The
            resulting award shall be final and binding on the Parties and shall
            be in lieu of any other remedy and the cost of Arbitration shall be
            borne equally between the parties irrespective of the outcome of
            such an award. <br />
            <br />
            exercises his/her right to reject arbitration, the other terms of
            this Agreement shall remain in full force and effect as if Attendee
            had not rejected arbitration.
          </p>

          <h5 className="body__header">GOVERNING LAW</h5>

          <p className="body__text">
            This Agreement shall be governed by the Laws of the Federal Republic
            of Nigeria.
          </p>
        </Section>
      </TermsAndConditionsWrapper>
    </GeneralLayout>
  );
};

export default TermsAndConditions;
