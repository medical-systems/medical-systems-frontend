import React from 'react';
import Footer from './Footer';
import '../styles/globals.css'; 

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
