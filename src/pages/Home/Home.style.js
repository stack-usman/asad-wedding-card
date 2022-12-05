import styled from "styled-components";

export const HomeStyle = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;

  .front-card-wrapper {
    position: relative;

    .front-card {
      width: 100%;
    }

    .guest-name {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffcc85;
      font-size: 15px;
      width: 80%;

      @media (max-width: 400px) {
          font-size: 3.5vw;
      }

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -5px;
        left: 0;
        background: #ffcc85;
      }
    }
  }
`;
