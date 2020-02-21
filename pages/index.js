import React from 'react';
import Link from 'next/link';

import GlobalStyle from '../templates/index';
import Header from '../components/header';

import {
  Wrapper,
  Presentation,
  Title,
  Subtitle,
  Projects,
  MainProject,
  Img,
  Copyright,
  ProjectDescription,
} from '../styles/home';

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Presentation>
          <Title>Hello!</Title>
          <Subtitle>I'm Saymon Souza, a Full-stack Web Developer</Subtitle>
          <MainProject>
            <Link href="/partner">
              <a>
                <Img src="1.jpeg" alt="Méliuz's Partner Page | 2019" />
                <ProjectDescription>Méliuz's Partner Page | 2019</ProjectDescription>
              </a>
            </Link>
          </MainProject>
          <Projects>
              <Link href="/challenge">
                <a>
                  <Img src="2.jpeg" alt="Méliuz's Challenge | 2018" />
                  <ProjectDescription>Méliuz's Challenge | 2018</ProjectDescription>
                </a>
              </Link>
              <Link href="/referral">
                <a>
                  <Img src="3.jpeg" alt="Méliuz's User Referral Page | 2019" />
                  <ProjectDescription>Méliuz's User Referral Page | 2019</ProjectDescription>
                </a>
              </Link>
          </Projects>
        </Presentation>
        <Copyright>
          <p>© 2020 Developed by Saymon Souza and Designed by <a href="https://www.linkedin.com/in/fernanda-mudesto-passos/">Fernanda Passos</a></p>
        </Copyright>
      </Wrapper>
    </>
  );
}

export default Index;
