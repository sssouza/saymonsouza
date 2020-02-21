import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../utils/analytics';

export default class MyApp extends App {
  componentDidMount() {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Saymon Souza | Portifolio</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
};

