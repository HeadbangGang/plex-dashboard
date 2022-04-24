import React, { PureComponent } from 'react'
import './wrapper.less'

export default class Wrapper extends PureComponent {
  render () {
    return (
      <div className="wrapper">
        { this.props.children }
      </div>
    )
  }
}
