import React from 'react';

import GlobalStyle from '../templates/index';
import Header from '../components/header';

import {
  Wrapper,
  Presentation,
  PresentationItem1,
  PresentationItem2,
  Img,
  Description,
  Title,
  Subtitle,
  Cta,
  ContactButton,
  Text,
  ResumeItem1,
  ResumeItem2,
  Container,
} from '../styles/about';

import { Copyright } from '../styles/home';

const About = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Wrapper>
          <Presentation>
            <PresentationItem1>
              <Img src="me.png" alt="Saymon Souza" />
            </PresentationItem1>
            <PresentationItem2>
              <Title>Hi, I'm Saymon.</Title>
              <Subtitle>I’m currently looking for Full-stack Web Developer opportunities.</Subtitle>
              <Cta>Get in touch:</Cta>
              <ContactButton href="mailto:sss@icomp.ufam.edu.br">E-mail</ContactButton>
              <ContactButton href="https://www.linkedin.com/in/saymon-souza/" target="_blank">LinkedIn</ContactButton>
              <ContactButton href="tel:5592991877780">Call</ContactButton>
            </PresentationItem2>
          </Presentation>
        </Wrapper>
        <Description>
          <h3>About me</h3>
          <Text>I have a Bachelor's degree in Information Systems and I'm in the final months of a Master's degree in web development. I am currently looking for full-time opportunities related to full-stack software engineering.</Text>
          <Text>I'm currently a full-stack web developer at Méliuz. I also work as a freelance designer for local and remote clients.</Text>
          <Text>I strive to challenge myself to try new things and develop my skills as I grow as a software engineer.</Text>
        </Description>
        <Wrapper>
          <Presentation>
            <ResumeItem1>
              <a href="cv_saymon-min.pdf" target="_blank">
                <Img src="resume.png" alt="Resume" />
              </a>
            </ResumeItem1>
            <ResumeItem2>
              <h3>Resume</h3>
              <Text>Last updated February 2020.</Text>
            </ResumeItem2>
          </Presentation>
        </Wrapper>
        <Copyright>
          <p>© 2020 Developed by Saymon Souza and Designed by <a href="https://www.linkedin.com/in/fernanda-mudesto-passos/">Fernanda Passos</a></p>
        </Copyright>
      </Container>
    </>
  );
}

export default About;
