import * as React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "!/lib/initApollo";
import Index from "!/containers";

class App extends React.Component {
  public apollo: any;
  constructor(props) {
    super(props);
    this.apollo = apolloClient();
  }

  render() {
    return (
      <ApolloProvider client={this.apollo}>
        <Index {...this.props} />
      </ApolloProvider>
    );
  }
}
export default App;
