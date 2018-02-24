import { ApolloClient, createNetworkInterface } from "react-apollo";
// TODO: change for unfetch
import fetch from "isomorphic-fetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!(<any>process).browser) {
  (<any>global).fetch = fetch;
}

function create() {
  return new ApolloClient({
    ssrMode: !(<any>process).browser,
    networkInterface: createNetworkInterface({
      uri: "graphqlurl", // Server URL (must be absolute)
      opts: {
        // Additional fetch() options like `credentials` or `headers`
        credentials: "same-origin"
      }
    })
  });
}

export default function initApollo() {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!(<any>process).browser) {
    return create();
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}
