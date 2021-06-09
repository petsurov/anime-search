import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
    }
`;

export const lightTheme = {
    body: '#B5D1EA',
    text: "#595E63"
};

export const darkTheme = {
    body: '#607990',
    text: "#fff"
};