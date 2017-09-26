import React from 'react'
import ReactDOM from 'react-dom'

import HR from './components/hellow.js'
import fucTest from './components/fucTest.js'

const App = () => (
  <div>
    <HR />
    <fucTest />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
