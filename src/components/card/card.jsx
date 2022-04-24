import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { alphabetizeByTitle } from '../../helpers/helpers'
import './card.less'

export default class Card extends PureComponent {
    static propTypes = {
      data: PropTypes.object
    }

    render () {
      const { title, urls } = this.props.data

      const sortedUrls = alphabetizeByTitle(urls)

      return (
        <div className="card-content">
          <div className="card-content__title">
            { title }
          </div>
          <div className="card-content__button-group">
            { sortedUrls.map((url, idx) => (
              <button key={ idx } className="card-content__button-group__button" onClick={ () => window.open(url.url, '_blank') }>
                { url.title }
              </button>
            )) }
          </div>
        </div>
      )
    }
}
