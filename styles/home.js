import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F3F4FB;

  a {
    text-decoration: none;
  }

  a, a:visited, a:hover, a:active {
    color: inherit;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
  }

  li {
    color: #1D1F50;
    padding: 8px;
    font-size: 21px;
    line-height: 29px;
  }
`;

const Presentation = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  max-width: 760px;
  margin: 24px 16px;

  @media only screen and (min-width: 576px) {
    max-width: 520px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    max-width: 1152px;
    margin: 0 32px;
  }

  @media only screen and (min-width: 992px) {
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  padding-top: 32px;
  padding-bottom: 8px;
`;

const Subtitle = styled.h3`
  padding-bottom: 32px;
  font-weight: normal;
  color: #118791;
`;

const MainProject = styled.div`
  @media only screen and (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-gap: 80px;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  max-width: 760px;
  margin: 24px 16px;

  a {
    text-decoration: none;
  }

  a, a:visited, a:active {
    color: inherit;
  }

  a:hover {
    color: purple;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 32px;
    padding-bottom: 32px;
    margin: 0 auto;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 16px;
  background-color: #118791;
  padding-top: 16px;
  padding-bottom: 16px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const HeaderDesktop = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const HeaderMobile = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 80px;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export {
  Wrapper,
  Header,
  Presentation,
  Title,
  Subtitle,
  Projects,
  MainProject,
  Img,
  Copyright,
  ProjectDescription,
  HeaderMobile,
  HeaderDesktop,
}