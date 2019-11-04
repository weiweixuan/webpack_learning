import React from 'react'
import ReactDOM from 'react-dom'
import './main.styl'
class Main extends React.Component {
  render() {
    return <div className="main">我是main pages</div>
  }
}

ReactDOM.render(<Main></Main>, document.querySelector('#root'))
