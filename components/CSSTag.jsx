"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const dev = process.env.NODE_ENV === 'development';
// Note
// this component will only work for ENV = development
const CSSTag = ({ style }) => {
    return dev && <style dangerouslySetInnerHTML={{ __html: style }}/>;
};
exports.default = CSSTag;
