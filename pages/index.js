import Head from 'next/head';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import { ViewRouteContext } from '../context/ViewRoute';
import axios from 'axios';
import { v4 as uuid4 } from 'uuid';
import { Box, Button, IconIoMdEye, IconIoMdEyeOff } from '../shared/chakra';
import { useContext, useEffect, useState } from 'react';

export default function App() {
  const { viewRoute, setViewRoute } = useContext(ViewRouteContext);
  const [navVisitble, setNavVisible] = useState(true);

  useEffect(() => {
    axios.post('/api/trackVisitor', {
      localStorage,
      cookie: document.cookie,
      location: document.location.href,
      referrer: document.referrer,
      userAgent: window.navigator.userAgent,
      date: new Date().toISOString(),
      uuid:
        localStorage.getItem('visitorUuid') ||
        (() => {
          const uuid = uuid4();
          localStorage.setItem('visitorUuid', uuid);
          return uuid;
        })(),
    });
  }, []);
  return (
    <div className="root">
      <meta name="theme-color" content="#00ff9d" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#00ff9d" />

      <Head>
        <title>Alexandro</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar navVisitble={navVisitble}></NavBar>
      {(() => {
        if (viewRoute === 'home') {
          return <Home fullScreen={!navVisitble}></Home>;
        }
        if (viewRoute === 'about') {
          return <About fullScreen={!navVisitble}></About>;
        }
        if (viewRoute === 'contact') {
          return <Contact fullScreen={!navVisitble}></Contact>;
        }
      })()}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="101039808207496"
      ></div>
      <Box>
        <Button
          w="40px"
          h="40px"
          position="fixed"
          fontSize="24px"
          left="20px"
          bottom="30px"
          borderRadius="100%"
          zIndex="9999999"
          onClick={() => {
            setNavVisible(!navVisitble);
          }}
          transition="2s"
          justifyContent="center"
          alignItems="center"
        >
          {navVisitble ? IconIoMdEyeOff() : IconIoMdEye()}
        </Button>
      </Box>
    </div>
  );
}
