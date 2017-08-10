import * as React from 'react'
import Head from 'next/head';
import CSSTag from './CSSTag';
import home from '!/styles/home.scss';

interface State {
  production: boolean
}
interface Props {
  title: string,
  children: React.ReactNode
}

class Layout extends React.Component {
  state: State
  props: Props
  constructor() {
    super();

    this.state = {
      production: process.env.NODE_ENV === 'production'
    };
  }

  render() {
    const { title, children } = this.props;
    const { production } = this.state;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {
            production &&
            <link rel="stylesheet" href="/static/css/app.css" />
          }
        </Head>
        <CSSTag style={home} />

        {children}

      </div>
    );
  }
}

export default Layout;