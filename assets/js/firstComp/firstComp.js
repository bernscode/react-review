import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Component through a Class

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  render () {
    return (<div>
        <Header />
        <img src="/img/bape.png" />
     </div>)
  }
}

//Dumb Component

var Header = function () {
  return (<header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>)
}



const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)
