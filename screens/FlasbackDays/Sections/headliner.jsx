import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Box } from "../../../components/lib/Box/styles";
import { HeadlinerWrapper } from "../flashbackDays.styles";

const HeadLiners = ({ data }) => {
  const [activeHeadliner, setActiveHeadliner] = useState(0);
  const [progress, setProgress] = useState(
    100 / data?.headliners?.Headliner?.length
  );

  const setNextHeadliner = () => {
    let num = activeHeadliner + 1;
    setActiveHeadliner(num);

    const val = 100 / data?.headliners?.Headliner?.length;
    setProgress(val * (num + 1) + "");
  };

  const setPrevHeadliner = () => {
    let num = activeHeadliner - 1;
    setActiveHeadliner(num);
    const val = 100 / data?.headliners?.Headliner?.length;
    setProgress(val * (num + 1) + "");
  };

  return (
    <>
      {data?.headliners?.Headliner?.map((item, idx) => (
        <React.Fragment key={idx}>
          {activeHeadliner === idx && (
            <HeadlinerWrapper color={data?.color} className="show">
              <Box className="headline__leftwrap">
                <img src={item?.mainHeadlinerImage?.url} />
              </Box>
              <Box className="headline__rightwrap">
                <Box className="right__textswrap">
                  <Box className="rightsection__header">
                    <h2 className="headliner__text">HEADLINER:</h2>
                    {data?.headliners?.Headliner?.length > 1 && (
                      <Box className="arrows-wrap">
                        {activeHeadliner - 1 >= 0 && (
                          <div onClick={setPrevHeadliner}>
                            <BsFillArrowLeftCircleFill />
                          </div>
                        )}
                        {activeHeadliner + 1 <
                          data?.headliners?.Headliner?.length && (
                          <div onClick={setNextHeadliner}>
                            <BsFillArrowRightCircleFill />
                          </div>
                        )}
                      </Box>
                    )}
                  </Box>
                  <h1 className="artist__name">{item?.artistName}</h1>
                  <h5 className="description">{item?.description}</h5>
                  {data?.headliners?.Headliner?.length > 1 && (
                    <Box alignItems="flex-start" className="progress__web">
                      <Box
                        className="progressbar__inner"
                        height={`${progress}%`}
                      ></Box>
                    </Box>
                  )}
                </Box>

                <Box>
                  <Box className="mainimage__mobile">
                    <img src={item?.mainHeadlinerImage?.url} />
                  </Box>
                </Box>
                <Box className="footerimages__wrap">
                  <Box className="footersub__wrap">
                    {item?.footerImages?.map((item, idx) => (
                      <Box
                        className="footerimage__main"
                        width={idx === 0 ? "40%" : "30%"}
                        key={idx}
                      >
                        <img src={item?.image?.url} />
                      </Box>
                    ))}
                  </Box>
                </Box>
                {data?.headliners?.Headliner?.length > 1 && (
                  <Box justifyContent="flex-start" className="progress__mobile">
                    <Box
                      className="progressbar__inner"
                      width={`${progress}%`}
                    ></Box>
                  </Box>
                )}
              </Box>
            </HeadlinerWrapper>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default HeadLiners;
