import React, { PureComponent } from 'react'

export default class Spinner extends PureComponent {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <img alt="loading" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Loader.gif" style={{ width: '100%', maxWidth: '500px' }} />
      </div>
    )
  }
}
