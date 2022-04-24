import React, { Suspense, useContext, useEffect, useState } from 'react'
import { UIContext } from '../providers/ui'
import servicesData from '../data/site-card-data'
import Spinner from './spinner'
import Statuses from './statuses'
import credentials from '../../credentials'

const Content = React.lazy(() => Promise.all([
  import('./content'),
  new Promise(resolve => setTimeout(resolve, 500))
]).then(([moduleExports]) => moduleExports))

const Heading = React.lazy(() => Promise.all([
  import('./heading'),
  new Promise(resolve => setTimeout(resolve, 500))
]).then(([moduleExports]) => moduleExports))

const Wrapper = React.lazy(() => Promise.all([
  import('./wrapper'),
  new Promise(resolve => setTimeout(resolve, 500))
]).then(([moduleExports]) => moduleExports))

const PlexDashboard = () => {
  const [statusResponses, setStatusResponses] = useState([])

  const { isSmallView } = useContext(UIContext)

  useEffect(async () => {
    await fetchStatuses()
  }, [])

  const fetchStatuses = async () => {
    const fetchUrls = []
    const usedTitles = []
    const allTitles = servicesData.map(group => (
      group.urls.map(title => (
        title.title.toLowerCase()
      ))
    )).flat()

    servicesData.forEach(title => {
      for (let i = 0; i < title.urls.length; i++) {
        const current = title.urls[i]
        const headers = {}
        const { email, password } = credentials
        if (current.url && current.url !== '/') {
          if (current.requiresAuth && email && password) {
            headers.Authorization = `Basic ${btoa(`${email}:${password}`)}`
          }
          fetchUrls.push(fetch(current.url, { headers }))
        }
      }
    })

    let statusResponses = await Promise.all(fetchUrls)

    statusResponses = statusResponses.map(({ status }) => {
      let title
      allTitles.some(item => {
        if (usedTitles.findIndex(usedTitle => usedTitle === item) === -1) {
          title = item
          usedTitles.push(item)
          return true
        }
        return false
      })
      return { status, url: title }
    })
    setStatusResponses(statusResponses)
  }

  return (
    <Suspense fallback={ <Spinner /> }>
      <Statuses statusResponses={ statusResponses } />
      <Wrapper>
        <Heading isSmallView={ isSmallView } />
        <Content isSmallView={ isSmallView } />
      </Wrapper>
    </Suspense>
  )
}

export default PlexDashboard
