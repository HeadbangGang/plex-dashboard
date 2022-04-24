import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cardData from '../../data/site-card-data'
import './content.less'

const Accordion = React.lazy(() => Promise.all([
  import('../accordion'),
  new Promise(resolve => setTimeout(resolve, 500))
]).then(([moduleExports]) => moduleExports))

const Card = React.lazy(() => Promise.all([
  import('../card'),
  new Promise(resolve => setTimeout(resolve, 500))
]).then(([moduleExports]) => moduleExports))

export default class Content extends PureComponent {
  static propTypes = {
    isSmallView: PropTypes.bool
  }

  state = {}

  render () {
    const { isSmallView } = this.props
    return (
      <div className={ isSmallView ? 'content-sv' : 'content' }>
        { cardData.sort().map((card, idx) => (
          isSmallView
            ? <Accordion data={ card } key={ idx } isExpanded={ this.state[card.title]?.isExpanded ?? false } setIsExpanded={ () => this.accordionhandler(card.title) } />
            : <Card data={ card } key={ idx } />
        )) }
      </div>
    )
  }

  accordionhandler = (title) => {
    this.setState({
      [title]: {
        isExpanded: !this.state[title]?.isExpanded ?? true
      }
    }, () => {
      Object.keys(this.state).filter(item => item !== title).forEach(id => {
        this.setState({
          [id]: {
            isExpanded: false
          }
        })
        document.getElementById('plex-dashboard').scrollIntoView({ behavior: 'smooth', alignToTop: true })
      })
    })
  }
}
