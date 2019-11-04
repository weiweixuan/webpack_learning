import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render() {
    return <div>我是main pages</div>
  }
}

ReactDOM.render(<Main></Main>, document.querySelector('#root'))
