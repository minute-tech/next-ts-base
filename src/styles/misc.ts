"use client"

import styled, { createGlobalStyle }  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // Try to stay away from using this Global Styling mainly for load times 
    // See: https://github.com/styled-components/styled-components/issues/2900
    body {
        margin: 0;
    }
`;

export const Hr = styled.div`
    border-bottom: ${(props: any) => props.height ? props.height : "2px"} solid ${props => props.color ? props.color : (props.theme?.color?.primary || "black")};
    margin: ${(props: any) => props.margin ? props.margin : "15px 0"};
    width: ${(props: any) => props.width ? props.width : "100%"};
    float: ${(props: any) => props.selected ? props.selected : "none"};
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
    padding: 3% 0;
    background-color: ${(props: any) => props.color ? props.color : "transparent"};

    @media (max-width: 992px) {
        width: 85%;
    }
`;