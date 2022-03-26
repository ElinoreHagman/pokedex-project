import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
import { Navigation } from "./components/Navigation";
import Content from "./components/Content";
import { Header } from "./components/Header";
import React from "react";

function App() {
  const [pageIndex, setPageIndex] = React.useState(0);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="App-background"></div>
        <div className="App-background-cover"></div>
        <Header pageIndex={pageIndex} />
        <Content pageIndex={pageIndex} />
        <Navigation setPageIndex={setPageIndex} pageIndex={pageIndex} />
      </div>
    </ApolloProvider>
  );
}

export default App;
