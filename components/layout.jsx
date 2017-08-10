"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const CSSTag_1 = require("./CSSTag");
const home_scss_1 = require("!/styles/home.scss");
class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            production: process.env.NODE_ENV === 'production'
        };
    }
    render() {
        const { title, children } = this.props;
        const { production } = this.state;
        return (<div>
        <head_1.default>
          <title>{title}</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          {production &&
            <link rel="stylesheet" href="/static/css/app.css"/>}
        </head_1.default>
        <CSSTag_1.default style={home_scss_1.default}/>

        {children}

      </div>);
    }
}
exports.default = Layout;
