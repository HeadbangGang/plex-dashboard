import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { alphabetizeByTitle } from '../../helpers/helpers'
import './accordion.less'

export default class Accordian extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
      isExpanded: PropTypes.bool,
      setIsExpanded: PropTypes.func
    }

    render () {
      const { data, isExpanded, setIsExpanded } = this.props

      const sortedUrls = alphabetizeByTitle(data.urls)
      return (
        <div className="accordion" >
          <Accordion expanded={ isExpanded } onClick={ () => setIsExpanded() }>
            <AccordionSummary>
              <div className="accordion__title">
                { data.title }
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion__buttons">
                { sortedUrls.map(item => (
                  <button className="accordion__nav-button" onClick={ () => window.open(item.url, '_blank') } key={ item.title }>
                    { item.title }
                  </button>
                )) }
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      )
    }
}
