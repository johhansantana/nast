import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '!/lib/initApollo'
import initRedux from '!/lib/initRedux'
import Index from '!/containers'
/**
 * Component to show the home container.
 */
class App extends React.Component {
  public apollo: any
  public store: any
  constructor(props) {
    super(props)
    this.apollo = apolloClient()
    this.store = initRedux(this.apollo, {})
  }

  render() {
    return (
      <ApolloProvider client={this.apollo} store={this.store}>
        <Index {...this.props} />
      </ApolloProvider>
    );
  }
}
export default App;