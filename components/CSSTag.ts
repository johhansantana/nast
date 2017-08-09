import * as React from 'react'
import PropTypes from 'prop-types'

const dev = process.env.NODE_ENV === 'development'

// Note
// this component will only work for ENV = development
const CSSTag = ({ style }) => {
  return dev && <style dangerouslySetInnerHTML={{ __html: style }} />
}

export default CSSTag