import React, { useState } from 'react';
import Link from 'next/link';

import {
  Wrapper,
  HeaderDesktop,
  HeaderMobile,
  Burger,
  Menu
} from '../styles/header';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderMobile>
        <Link href="/">
          <a>
            <h1>Saymon Souza</h1>
          </a>
        </Link>
        <Burger open={open} onClick={()=>setOpen(!open)}><div /><div /><div /></Burger>
        <Menu open={open}>
          <Link href="/"><a>Work</a></Link>
          <Link href="/about"><a>About</a></Link>
        </Menu>
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
        </ul>
      </HeaderDesktop>
    </Wrapper>
  );
}

export default Header;
