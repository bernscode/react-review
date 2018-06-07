import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div>
        <img src="/img/supreme.png" />
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
