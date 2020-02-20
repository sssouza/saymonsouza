import React from 'react';

import GlobalStyle from '../templates/index';
import Header from '../components/header';

import {
  Folder,
  FirstSection,
  Sections,
  SecondSection,
  Wrapper,
  Subtitle,
  Item,
  Button
} from '../styles/partner';

import { Copyright } from '../styles/home';

const Partner = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Folder>
          <h2></h2>
        </Folder>
        <Sections>
          <FirstSection>
            <h3>Méliuz's Partner Page</h3>
            <Subtitle>Problem to solve</Subtitle>
            <p>The company needed a new partner page and not only the website was in need of a new and modern design, but needed to be extremely fast
              and to rank as best as possible.
            </p>
            <Subtitle>Solution development</Subtitle>
            <p>
              I worked the project from September - December of 2019 and participated in almost every phase of the project, from working on the UX with the UI team
              to the requirement validations QA team.
            </p>
            <p>On the front-end side, I developed both the mobile and desktop pages using pure HTML, CSS using SASS and vanilla Javascript.</p>
            <p>On the backend-end side, I workend on improving the REST API route that is used to provide the data to the page.</p>
            <Subtitle>Results</Subtitle>
            <p>
              Not only the page gained a new design but scored 99 score on the Google's PageSpeedInsights (<a href="https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fwww.meliuz.com.br%2Fdesconto%2Famazon">Font</a>) and
              is the second best coupons page ranked on Google (<a href="https://www.google.com/search?q=cupom+amazon&oq=cupom+amazon&aqs=chrome..69i57j69i60l3.2855j0j9&sourceid=chrome&ie=UTF-8">Font</a>)
            </p>
            <Button>
              <a href="https://www.meliuz.com.br/desconto/amazon" target="_blank">Visit the page</a>
            </Button>
          </FirstSection>
          <SecondSection>
            <h3>Skills developed</h3>
            <Item>HTML</Item>
            <Item>CSS</Item>
            <Item>Vanilla Javascript</Item>
            <Item>REST</Item>
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
