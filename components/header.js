import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

import {
  Wrapper,
  HeaderDesktop,
  HeaderMobile,
  Burger,
  Menu
} from '../styles/header';

const Header = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

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
          <Link href="/"><a className={router.pathname !== "/about" ? "active" : ""}>WORK</a></Link>
          <Link href="/about"><a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a></Link>
        </Menu>
      </HeaderMobile>
      <HeaderDesktop>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname !== "/about" ? "active" : ""}>WORK</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
            </Link>
          </li>
        </ul>
      </HeaderDesktop>
    </Wrapper>
  );
}

export default Header;
