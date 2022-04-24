import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './statuses.less'

export default class Statuses extends PureComponent {
  static propTypes = {
    statusResponses: PropTypes.array
  }

  render () {
    console.log(this.props.statusResponses)
    return (
      <div className="statuses-container">
        { this.props.statusResponses.map((item, idx) => (
          <div key={ idx } className={ `status ${this.className(item.status)}` }>
            { `${item.url?.slice(0, 1).toUpperCase() + item.url?.slice(1, item.url?.length)} : ${item.status}` }
          </div>
        )) }
      </div>
    )
  }

  className = (statusCode) => {
    if ([200, 401].indexOf(statusCode) > -1) {
      return 'green'
    } else if (statusCode === (400 || 500)) {
      return 'yellow'
    } else {
      return 'red'
    }
  }
}
