import * as React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "!/lib/initApollo";
import Index from "!/containers";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient()}>
        <Index {...this.props} />
      </ApolloProvider>
    );
  }
}
export default App;
