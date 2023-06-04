import React from "react";
import {
  FlashBackFlowerRight,
  FlashBackFlowerLeft,
  FlashBackFlowerWrap,
} from "./bgFlowers.styles";

const BackgroundFlowers = ({ rightFlower, leftFlower }) => {
  return (
    <FlashBackFlowerWrap>
      {/* 1 */}
      <FlashBackFlowerLeft
        top="40px"
        width="700px"
        left="-330px"
        rotate
        nomobile
      >
        <img src={rightFlower} alt="" />
      </FlashBackFlowerLeft>

      <FlashBackFlowerRight
        top="40px"
        width="700px"
        right="-330px"
        nomobile
        rotate
      >
        <img src={rightFlower} alt="" />
      </FlashBackFlowerRight>

      {/* 2 */}
      <FlashBackFlowerLeft
        top="800px"
        width="700px"
        left="-330px"
        rotate
        nomobile
      >
        <img src={rightFlower} alt="" />
      </FlashBackFlowerLeft>

      <FlashBackFlowerRight
        top="800px"
        width="700px"
        right="-330px"
        nomobile
        rotate
      >
        <img src={rightFlower} alt="" />
      </FlashBackFlowerRight>

      {/* 4 */}
      <FlashBackFlowerLeft
        top="1300px"
        width="300px"
        left="-100px"
        className="first__image"
      >
        <img src={leftFlower} alt="" />
      </FlashBackFlowerLeft>

      <FlashBackFlowerRight
        top="1200px"
        width="300px"
        right="-50px"
        className="second__image"
      >
        <img src={leftFlower} alt="" />
      </FlashBackFlowerRight>

      {/* 4 */}
      <FlashBackFlowerLeft
        top="1750px"
        width="300px"
        left="-150px"
        className="third__image"
      >
        <img src={leftFlower} alt="" />
      </FlashBackFlowerLeft>

      <FlashBackFlowerRight
        top="2250px"
        width="300px"
        right="-40px"
        className="fourth__image"
      >
        <img src={leftFlower} alt="" />
      </FlashBackFlowerRight>
    </FlashBackFlowerWrap>
  );
};

export default BackgroundFlowers;
