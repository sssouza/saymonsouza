import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F3F4FB;

  .active {
    font-weight: bold;
  }

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
  justify-content: space-around;
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#118791'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F3F4FB;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 200px;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

//343078

export {
  Wrapper,
  HeaderMobile,
  HeaderDesktop,
  Burger,
  Menu,
}