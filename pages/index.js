import Link from 'next/link';

import GlobalStyle from '../templates/index';

import {
  Wrapper,
  Header,
  HeaderDesktop,
  HeaderMobile,
  Presentation,
  Title,
  Subtitle,
  Projects,
  MainProject,
  Img,
  Copyright,
  ProjectDescription,
} from '../styles/home';

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <HeaderMobile>
            <h1>Saymon Souza</h1>
            <img src="sand.png" />
          </HeaderMobile>
          <HeaderDesktop>
            <ul>
              <li>
                <Link href="/">
                  <a>WORK</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </HeaderDesktop>
        </Header>
        <Presentation>
          <Title>Hello!</Title>
          <Subtitle>I'm Saymon Souza, a Full-stack Web Developer</Subtitle>
          <MainProject>
            <Img src="1.png" />
            <ProjectDescription>Méliuz's Partner Page | 2019</ProjectDescription>
          </MainProject>
          <Projects>
              <Img src="2.png" />
              <ProjectDescription>Méliuz's Challenge | 2018</ProjectDescription>
              <Img src="3.png" />
              <ProjectDescription>Méliuz's Referral Program | 2019</ProjectDescription>
          </Projects>
        </Presentation>
        <Copyright>
          <p>© 2020 Developed by Saymon Souza and Designed by <a href="https://www.linkedin.com/in/fernanda-mudesto-passos/">Fernanda Passos</a></p>
        </Copyright>
      </Wrapper>
    </>
  );
}