import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    font-size: 28px;
    line-height: 39px;
  }

  h2 {
    font-size: 43px;
    line-height: 53px;
  }

  h3 {
    font-size: 29px;
    line-height: 39px;
  }

  h4 {
    font-size: 19px;
    line-height: 29px;
  }

  p {
    font-size: 15px;
    line-height: 23px;
  }
`;

const FolderPartner = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./1.jpeg');
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  & h2 {
    color: green;
    text-transform: uppercase;
    margin: 0;
    position: relative;
    text-align: center;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    transform: translate(-50%, -50%);
  }
`;

const FolderChallenge = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./background_challenge.jpeg');
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  & h2 {
    color: green;
    text-transform: uppercase;
    margin: 0;
    position: relative;
    text-align: center;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    transform: translate(-50%, -50%);
  }
`;

const FolderReferral = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./background_referral.jpeg');
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  & h2 {
    color: green;
    text-transform: uppercase;
    margin: 0;
    position: relative;
    text-align: center;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    transform: translate(-50%, -50%);
  }
`;

const Sections = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 64px 0;
  max-width: 760px;
  margin: 24px 16px;

  @media only screen and (min-width: 576px) {
    max-width: 520px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    max-width: 1152px;
    margin: 0 32px;
    grid-template-columns: auto auto;
    grid-gap: 80px;
  }

  @media only screen and (min-width: 992px) {
    margin: 0 auto;
    padding: 64px 32px;
  }
`;

const FirstSection = styled.div``;

const SecondSection = styled.div``;

const Subtitle = styled.h4`
  margin: 16px 0;
`;

const SkillsTitle = styled.h3`
  margin-top: 24px;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Content = styled.p`
  margin-top: 8px;
`;

const ToolsTitle = styled.h3`
  margin-top: 24px;
`;

const Button = styled.span`
  background: #d3d3f0;
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  border: solid 1px #d3d3f0;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 8px;
  margin-top: 16px;
  display: inline-block;
  
  a {
    text-decoration: none;
    color: black;
  }
`;

const Item = styled.span`
  background: #F5F5F5;
  color: black;
  padding: 8px 12px;
  border-radius: 4px;
  border: solid 1px #F5F5F5;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 8px;
  margin-top: 16px;
  display: inline-block;
  
  a {
    text-decoration: none;
    color: black;
  }
`;

export {
  FolderPartner,
  SkillsTitle,
  ToolsTitle,
  FolderChallenge,
  FolderReferral,
  FirstSection,
  SecondSection,
  Sections,
  Wrapper,
  Subtitle,
  Item,
  Button,
  Content
}
