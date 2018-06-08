import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Component through a Class

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern',
      health: 20,
      level: 1,
      lowLevelClass: 'danger-red'
    }
  }
  render () {
    return (<div id={'parent'}>
        <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ''}`}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
        <img src="/img/bape.png" alt={'girl with bape'} />
        </div>
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
