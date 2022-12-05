import styled from "styled-components"

export const NavbarStyle = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 5px;
    z-index: 10000000;
    background: #debda1;

    .tabs-wrapper {
        display: flex;
        justify-content: center;

        .tab {
            padding: 5px;
            margin: 0 10px;
            background: #004543;
            color: #fff;
            text-decoration: none;
            z-index: 10000000;

            @media(max-width: 370px) {
                font-size: 13px;
            }

            &.active {
                background: #ecb561;
            }
        }
    }
`