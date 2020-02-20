import styled from 'styled-components';

const Wrapper = styled.div`
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
  HeaderMobile,
  HeaderDesktop,
}