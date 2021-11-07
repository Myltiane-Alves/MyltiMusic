import styled, { createGlobalStyle } from 'styled-components';
import { motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro',sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: ${({ margin}) => (margin ? margin : '0 auto')};
    padding: ${({ padding }) => (padding ? padding : '0 50px')};

    @media screen and (max-width: 960px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const MainHeading = styled.h1`
    text-align: center;
`;

export const Heading = styled.h2`
    text-align: center;
`;

export const TextWrapper = styled.span`
    font-size: ${({ size }) => (size ? size : '')};
`;

export const Section = styled.section`
    background:${({ inverse }) => (inverse ? '#101522' : 'white' ) }
`;

export const Row = styled.div`
    display: flex;
`;

export const Column = styled.div`
    flex-direction: column;
`;

export const Button = styled(motion.button)`
    border-radius: 4px;
    background: #d61eed;
    
`;

export default GlobalStyle;
