import React from 'react';

import GlobalStyle from '../templates/index';
import Header from '../components/header';

import {
  FolderChallenge,
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

const Challenge = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <FolderChallenge>
          <h2></h2>
        </FolderChallenge>
        <Sections>
          <FirstSection>
            <h3>Méliuz's Challenge</h3>
            <Subtitle>Problem to solve</Subtitle>
            <Content>
              The company was developing a contest to find the next big Brazilian web influencer.
            </Content>
            <Content>
              Our task was to develop pages where
              the users could make applications, see how many people were interacting with them and develop the back-end to make
              all of these interactions happen.
            </Content>
            <Subtitle>Solution development</Subtitle>
            <Content>
              I worked on the project from September - December of 2018 and participated in almost every phase of the project, from working on the UX with the UI team
              to the requirement validations with the QA team.
            </Content>
            <Content>
              On the front-end side, I developed both the mobile and desktop pages using Laravel, a PHP framework. I used SASS and Vanilla Javascript to apply styles and interactions to the page, respectively.
            </Content>
            <Content>
              On the back-end side, I worked on improving the REST API route used to provide data to the page.
            </Content>
            <Subtitle>Results</Subtitle>
            <Content>
              Fortunately, the project was a big success and helped the company gain more than 200.000 new users during the month of competition.
            </Content>
            <Content>
              The page held strong, even with more than 1.000 simultaneous, a record for the company at that time.
            </Content>
            <Button>
              <a href="https://www.meliuz.com.br/desafio/2018" target="_blank">Visit the page</a>
            </Button>
          </FirstSection>
          <SecondSection>
            <SkillsTitle>Skills developed</SkillsTitle>
            <Item>HTML</Item>
            <Item>CSS (SASS)</Item>
            <Item>Vanilla Javascript</Item>
            <Item>Laravel</Item>
            <Item>PHP</Item>
            <Item>REST</Item>
            <Item>Git</Item>
            <Item>SQL</Item>
            <Item>Python</Item>
            <Item>Continuous Deployment</Item>

            <ToolsTitle>Tools used</ToolsTitle>
            <Item>Scrum</Item>
            <Item>Jira</Item>
            <Item>Linux</Item>
            <Item>Google Analytics</Item>
            <Item>npm</Item>
            <Item>MySQL</Item>
            <Item>CircleCi</Item>
          </SecondSection>
        </Sections>
        <Copyright>
          <p>© 2020 Developed by Saymon Souza and Designed by <a href="https://www.linkedin.com/in/fernanda-mudesto-passos/">Fernanda Passos</a></p>
        </Copyright>
      </Wrapper>
    </>
  );
}

export default Challenge;
