import React from 'react';
import { Link } from 'react-router-dom';
import { BiPlayCircle} from 'react-icons/bi'
import { Button, Column, MainHeading, Row, TextWrapper} from '../../GlobalStyles';
import  { HeaderSection, ButtonContainer} from './styles';

const Header = () => {
    return (
        <HeaderSection id="hero">
            <Row justify="center" align="center" height="100%" padding="2rem" >
               <Column align="center" mb="10%">
                  <MainHeading>Muita Criatividade Musical</MainHeading> 
                   <TextWrapper
                        color="white"
                        size="clamp(1rem, 2vw,1.3rem)"
                        margin="0 0 2rem"
                        lineHeight="1.1rem"
                        maxWidth="480px"
                        align="center"
                   >

                   </TextWrapper>
                   <ButtonContainer >
                       <Link to={'/sign-up'} >
                          <Button>
                            Iniciar
                          </Button>  
                       </Link>
                       <Button big fontBig>
                          <BiPlayCircle size="2.3rem" />  Download
                       </Button>
                   </ButtonContainer>
                </Column> 

            </Row>
        </HeaderSection>
    )
}

export default Header;