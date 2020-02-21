import React from 'react';

import GlobalStyle from '../templates/index';
import Header from '../components/header';

import {
  FolderReferral,
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

const Referral = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <FolderReferral>
          <h2></h2>
        </FolderReferral>
        <Sections>
          <FirstSection>
            <h3>Méliuz's User Referral Page</h3>
            <Subtitle>Problem to solve</Subtitle>
            <Content>
              The company had a really old referral page and needed a new one to match the new UI and benefits guidilines.
            </Content>
            <Subtitle>Solution development</Subtitle>
            <Content>
              I worked on the project from April - August of 2019 and participated in almost every phase of the project, from working on the UX with the UI team
              to the requirement validations with the QA team.
            </Content>
            <Content>
              On the front-end side, I developed both the mobile and desktop pages using React.
            </Content>
            <Content>
              On the backend-end side, I worked developing a REST API using Node that would provide the data to the page.
            </Content>
            <Subtitle>Results</Subtitle>
            <Content>
              The project was considered a success for the company given that the page reached more people than the old one.
            </Content>
            <Button>
              <a href="https://www.meliuz.com.br/i/israel" target="_blank">Visit the page</a>
            </Button>
          </FirstSection>
          <SecondSection>
            <SkillsTitle>Skills developed</SkillsTitle>
            <Item>React</Item>
            <Item>HTML</Item>
            <Item>CSS (Styled Components)</Item>
            <Item>Javascript</Item>
            <Item>REST</Item>
            <Item>Node</Item>
            <Item>Git</Item>
            <Item>SQL</Item>
            <Item>Continuous Deployment</Item>

            <ToolsTitle>Tools used</ToolsTitle>
            <Item>Scrum</Item>
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

export default Referral;
