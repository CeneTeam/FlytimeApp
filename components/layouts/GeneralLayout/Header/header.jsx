import React, { useState, useEffect } from "react";
import { Box, FlexibleUL } from "../../../lib/Box/styles";
import { MobileHeaderStyles, DesktopHeaderStyles } from "./header.styles";
import { useRouter } from "next/router";
import Button from "../../../lib/Button";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { FlutterWaveSvg } from "../../../../assets/images/layout/svgExports";
import { getNavItems } from "../../../../network/homepage";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const Header = () => {
  const { asPath } = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { data: navItemsData } = useQuery(["navItems"], getNavItems);
  const [items, setItems] = useState([]);
  const [aboutPaths, setAboutPaths] = useState([]);

  const navItems = navItemsData?.PostLayout[0]?.navItems?.NavItem;
  const router = useRouter();

  useEffect(() => {
    navItemsData?.PostLayout[1]?.navDropdown?.NavDropdownItem?.map((item) => {
      setItems((prev) =>
        prev.concat([
          ...items,
          {
            key: item.key,
            label: <Link href={item?.href}>{item?.title}</Link>,
          },
        ])
      );
    });
  }, [navItemsData, setItems]);

  useEffect(() => {
    navItemsData?.PostLayout[0]?.navItems?.NavItem[3]?.paths?.map((item) => {
      setAboutPaths((prev) => prev.concat([...aboutPaths, item?.path]));
    });
  }, [navItemsData, setAboutPaths]);

  return (
    <>
      <MobileHeaderStyles showMobileNav={showMobileNav}>
        <Box className="topsection_wrap">
          <Box className="top__leftsection__wrap">
            <div className="logo__wrap" onClick={() => router.push("/")}>
              <FlutterWaveSvg width={100} color="#ffffff" />
            </div>
          </Box>
          <div
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="menuicon__wrap"
          >
            {!!showMobileNav ? <AiOutlineClose /> : <FiMenu />}
          </div>
        </Box>

        <Box className="mobile__navsection_wrap">
          <FlexibleUL className="mobile__navitems__wrap">
            {navItems?.map((item, idx) => (
              <div key={idx + item.path}>
                {item.dropDownItems ? (
                  <Dropdown
                    menu={{ items }}
                    placement="bottomLeft"
                    trigger={"click"}
                  >
                    <Button
                      id={
                        item.title === "ABOUT" && aboutPaths?.includes(asPath)
                          ? "activepath"
                          : ""
                      }
                    >
                      About <DownOutlined />
                    </Button>
                  </Dropdown>
                ) : (
                  <li
                    className="navitem"
                    id={asPath === item.path ? "activepath" : ""}
                    onClick={() => router.push(item.path)}
                  >
                    {item.title}
                  </li>
                )}
              </div>
            ))}
          </FlexibleUL>
          {/* <Button onClick={handleGetTickets}>Get Tickets</Button> */}
        </Box>
      </MobileHeaderStyles>

      {/* Desktop Header */}
      <DesktopHeaderStyles>
        <Box className="leftsection__wrap">
          <div className="logo__wrap" onClick={() => router.push("/")}>
            <FlutterWaveSvg width={100} color="#ffffff" />
          </div>
        </Box>
        <Box className="rightsection__wrap">
          <FlexibleUL className="navitems__wrap">
            {navItems?.map((item, idx) => (
              <div key={idx + item.path}>
                {item.dropDownItems ? (
                  <Dropdown
                    menu={{ items }}
                    placement="bottom"
                    trigger={["click", "hover"]}
                  >
                    <Button
                      id={
                        item.title === "ABOUT" && aboutPaths?.includes(asPath)
                          ? "activepath"
                          : ""
                      }
                    >
                      About <DownOutlined />
                    </Button>
                  </Dropdown>
                ) : (
                  <li
                    className="navitem"
                    id={asPath === item.path ? "activepath" : ""}
                    onClick={() => router.push(item.path)}
                  >
                    {item.title}
                  </li>
                )}
              </div>
            ))}
          </FlexibleUL>
          {/* <a
            href="https://tickets.flytimefest.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Get Tickets</Button>
          </a> */}
        </Box>
      </DesktopHeaderStyles>
    </>
  );
};

export default Header;
