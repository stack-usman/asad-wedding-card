import styled from "styled-components";

export const CardFrontStyle = styled.div`
  background-image: url(/images/envelop-bottom.png);
  background-position: center center;
  background-size: 100% 100%;
  position: relative;

  &:after {
    content: "";
    background: #debda1;
    bottom: -240px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 240px;
  }

  &.card-back {
    &:after {
      content: "";
      background-image: url(/images/envelop-top.png);
      background-position: center -80px;
      background-size: contain;
    }
  }
`;

export const CardWrapperStyle = styled.div`
  overflow: hidden;
  height: ${(props) => 100 - props.currentYPosition}%;
  img {
    width: 85%;
  }
`;
