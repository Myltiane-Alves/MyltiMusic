import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Section,  } from '../../GlobalStyles';

import {
    ContentRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    BigCollumn,
    SmallCollumn,
    Box
} from './styles';
const Content = () => {
    return (
        <>
            <Section padding="160px 0" ref={ref} inverse={inverse} id={id}>
                <Container>
                    <ContentRow>
                        <SmallCollumn>
                            <TextWrapper>
                                <TopLine>
                                    <Box>
                                        <Box>{topLine.extraText}</Box>
                                        {topLine.Text}
                                    </Box>
                                </TopLine>
                                <Heading>
                                    {headline}
                                </Heading>
                                <Subtitle>
                                    {description}
                                </Subtitle>

                                {bottomImg ? (
                                    <Img

                                    />
                                ) : (
                                    <Link>
                                       <Button>

                                          {buttonLabel}     
                                        </Button> 
                                    </Link>
                                )}
                            </TextWrapper>
                        </SmallCollumn>
                        <BigCollumn>

                            <ImgWrapper>
                               <Img src={img} alt={alt} />     
                            </ImgWrapper>
                        </BigCollumn>
                    </ContentRow>
                </Container>
            </Section>
        </>
    )
}

export default Content;