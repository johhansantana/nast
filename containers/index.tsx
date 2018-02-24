import * as React from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import Layout from "!/layouts";

interface Props {
  getUsers: {
    allUsers: [
      {
        id: string;
        name: string;
      }
    ];
    error: {
      graphQLErrors: [
        {
          message: string;
        }
      ];
    };
    loading: boolean;
  };
  children: React.ReactNode;
}

const Index: React.SFC = (props: Props) => (
  <Layout title="Without server side rendering">
    {/* TODO: make an example with SSR */}
    <h3>Without Server side rendering</h3>
    {/* show loading while fetching (will not show when fetched from the server) */}
    {props.getUsers.loading && <span>Fetching users...</span>}
    {!props.getUsers.loading && <span>Users:</span>}
    <ul>
      {/* show list of user's names */}
      {!props.getUsers.loading &&
        !props.getUsers.error &&
        props.getUsers.allUsers.map((u, i) => (
          <li key={i}>
            <strong>Name: </strong>
            {u.name}
          </li>
        ))}
      {/* show errors if any */}
      {props.getUsers.error && (
        <div>
          <span>There were errors:</span>
          <ul>
            {props.getUsers.error.graphQLErrors.map((e, i) => (
              <li key={i}>{e.message}</li>
            ))}
          </ul>
        </div>
      )}
    </ul>
  </Layout>
);

// to get the error example, change `name` for `namee` or something else
const getUsers = gql`
  {
    allUsers {
      id
      name
    }
  }
`;

const connectGraphql = compose<any>(
  graphql(getUsers, {
    name: "getUsers"
  })
);

export default connectGraphql(Index);
