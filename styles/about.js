import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f9f9fd;
`;

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin: 0px 16px 24px 16px;
  padding: 64px 0px;

  @media only screen and (min-width: 576px) {
    max-width: 520px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 1152px;
    margin: 0 32px;
  }

  @media only screen and (min-width: 992px) {
    margin: 0 auto;
  }
`;

const PresentationItem1 = styled.div`
  width: 100%;
  padding-bottom: 16px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-right: 32px;
  }
`;

const PresentationItem2 = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

const Description = styled.div`
    max-width: 760px;
    padding: 64px 0;
    margin: 0px 16px 24px 16px;

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

const Title = styled.h1`
  padding-bottom: 24px;
`

const Subtitle = styled.h3`
  padding-bottom: 24px;
`

const Cta = styled.h3`
  padding-bottom: 16px;
`;

const ContactButton = styled.a`
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
`;

const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const ResumeItem1 = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const ResumeItem2 = styled.div`
  width: 100%;
  padding-bottom: 16px;

  @media only screen and (min-width: 768px) {
    width: 40%;
    margin-left: 32px;
  }
`;

export {
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
  ResumeItem2
}