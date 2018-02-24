import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!(<any>process).browser) {
  (<any>global).fetch = fetch;
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: (<any>process).browser,
    ssrMode: !(<any>process).browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: "https://api.graph.cool/simple/v1/cje0vldx80piv0126tc5ffsjh", // Server URL (must be absolute)
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache()
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!(<any>process).browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
