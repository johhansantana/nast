import * as React from 'react'

interface Props {
  style: any
}

const dev = process.env.NODE_ENV === 'development'

// Note
// this component will only work for ENV = development
const CSSTag: React.SFC<Props> = ({style}: Props) => {
  return dev && <style dangerouslySetInnerHTML={{ __html: style }} />
}

export default CSSTag