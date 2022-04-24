import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './heading.less'

export default class Heading extends PureComponent {
  static propTypes = {
    isSmallView: PropTypes.bool
  }

  render () {
    return (
      <div className={ `heading ${this.props.isSmallView ? 'heading__sv' : 'heading__lv'}` }>
        Plex Dashboard
      </div>
    )
  }
}
