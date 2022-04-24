import React from 'react'
import ReactDOM from 'react-dom'
import PlexDashboard from './components/plex-dashboard'
import ContextWrapper from './providers'

ReactDOM.render(
  <ContextWrapper>
    <PlexDashboard />
  </ContextWrapper>,
  document.getElementById('plex-dashboard')
)
