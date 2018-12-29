import React from 'react'
import './styles.css'
import { hot } from 'react-hot-loader'
const Warning = React.lazy(() => import('./warning'))

class App extends React.Component {
  render() {
    return <div>React boilerplate code</div>
  }
}

export default hot(module)(App)
