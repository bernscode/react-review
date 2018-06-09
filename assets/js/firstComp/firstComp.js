import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Component through a Class

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern',
      health: 100,
      level: 1,
      lowLevelClass: 'danger-red'
    }
    this.clickedGirl = this.clickedGirl.bind(this)
  }

  clickedGirl(){
    this.setState({
      health: this.state.health - 25
    }, function() {
      console.log('Hey I clicked the girl, her health is now ' + this.state.health)
    })
  }

  render () {
    return (<div id={'parent'}>
      <Header />
      <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ''}`}>
          <div className={'user-info'}>
            <h3>Name: {this.state.name}</h3>
            <h3>Health: {this.state.health}</h3>
            <h3>Level: {this.state.level}</h3>
          </div>
          <GirlImage />
        </div>
     </div>)
  }
}








//Component through a Class

class GirlImage extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    return (<div className="GirlImageComp">
      <img src="/img/bape.png" alt={'girl with bape'} onClick={this.clickedGirl}/>
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

ReactDOM.render(<Layout />, app)
