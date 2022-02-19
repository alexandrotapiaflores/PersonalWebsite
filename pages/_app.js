import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ViewRouteContext } from "../context/ViewRoute";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [viewRoute, setViewRoute] = useState("home");
  return (
    <ChakraProvider>
      <ViewRouteContext.Provider
        value={{ viewRoute: viewRoute, setViewRoute: setViewRoute }}
      >
        <Component {...pageProps} />
      </ViewRouteContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
