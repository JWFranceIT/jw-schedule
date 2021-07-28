import "../styles/globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "antd/dist/antd.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainLayout from "../layout/MainLayout";

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
