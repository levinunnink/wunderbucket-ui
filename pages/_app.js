import React from 'react'; // eslint-disable-line
import App from 'next/app';

class WunderbucketUIApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default WunderbucketUIApp;
