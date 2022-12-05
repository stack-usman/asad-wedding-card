import styled from "styled-components"

export const PointerAnimationStyle = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    animation: pointer-hand-animate 3s ease-out forwards;
    animation-delay: 3s;
    opacity: 0;

    svg {
        width: 90px;
    }

    @keyframes pointer-hand-animate {
        0% {
            top: 60%;
            opacity: 0.7;
        }

        30% {
            opacity: 0.7;
        }

        45% {
            top: 30%;
            opacity: 0;
        }

        46% {
            top: 60%;
            opacity: 0;
        }

        50% {
            opacity: 0.7;
            top: 60%;
        }

        80% {
            opacity: 0.7;
        }

        95% {
            top: 30%;
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }
`