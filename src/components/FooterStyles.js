// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
    padding: 5% 2.5%;
    background: black;
    margin-top: 5rem;
   font-family: "Alata", serif;
    // position: absolute;
    bottom: 0;
    width: 100%;


    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 10px;
    margin-top: 1.5rem;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;