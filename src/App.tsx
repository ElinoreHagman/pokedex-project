import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
import { CardCollection } from "./components/CardCollection";
import styled from "styled-components";

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #ffcb05;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Title>Shuffle A Random Pokemon Card Deck</Title>
          <CardCollection />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
