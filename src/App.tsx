import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
import { CardCollection } from "./components/CardCollection";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <CardCollection />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
