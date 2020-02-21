import React from 'react';

import GlobalStyle from '../templates/index';
import Header from '../components/header';

import {
  FolderPartner,
  FirstSection,
  Sections,
  SecondSection,
  Wrapper,
  Subtitle,
  Item,
  Button,
  SkillsTitle,
  ToolsTitle,
  Content
} from '../styles/partner';

import { Copyright } from '../styles/home';

const Partner = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <FolderPartner>
          <h2></h2>
        </FolderPartner>
        <Sections>
          <FirstSection>
            <h3>Méliuz's Partner Page</h3>
            <Subtitle>Problem to solve</Subtitle>
            <Content>
              The company needed a new partner page and not only the website was in need of a new and modern design, but needed to be extremely fast
              and to rank as best as possible.
            </Content>
            <Subtitle>Solution development</Subtitle>
            <Content>
            I worked on the project from September - December of 2019 and participated in almost every phase of the project, from working on the UX with the UI team to the validation with the QA team.
            </Content>
            <Content>On the front-end side, I developed both the mobile and desktop pages using HTML, CSS (SASS) and vanilla Javascript.</Content>
            <Content>On the back-end side, I worked on improving the REST API route used to provide data to the page.</Content>
            <Subtitle>Results</Subtitle>
            <Content>
              Not only the page gained a new design but scored 99 score on the Google's PageSpeedInsights (<a href="https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fwww.meliuz.com.br%2Fdesconto%2Famazon">Font</a>) and
              is the second best coupons page ranked on Google (<a href="https://www.google.com/search?q=cupom+amazon&oq=cupom+amazon&aqs=chrome..69i57j69i60l3.2855j0j9&sourceid=chrome&ie=UTF-8">Font</a>).
            </Content>
            <Button>
              <a href="https://www.meliuz.com.br/desconto/amazon" target="_blank">Visit the page</a>
            </Button>
          </FirstSection>
          <SecondSection>
            <SkillsTitle>Skills developed</SkillsTitle>
            <Item>HTML</Item>
            <Item>CSS (SASS)</Item>
            <Item>Vanilla Javascript</Item>
            <Item>REST</Item>
            <Item>Git</Item>
            <Item>SQL</Item>
            <Item>Node</Item>
            <Item>Continuous Deployment</Item>

            <ToolsTitle>Tools used</ToolsTitle>
            <Item>Scrum</Item>
            <Item>Jira</Item>
            <Item>Linux</Item>
            <Item>Google Analytics</Item>
            <Item>npm</Item>
            <Item>CircleCi</Item>
            <Item>MySQL</Item>
          </SecondSection>
        </Sections>
        <Copyright>
          <p>© 2020 Developed by Saymon Souza and Designed by <a href="https://www.linkedin.com/in/fernanda-mudesto-passos/">Fernanda Passos</a></p>
        </Copyright>
      </Wrapper>
    </>
  );
}

export default Partner;
