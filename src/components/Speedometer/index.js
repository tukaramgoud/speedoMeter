import {Component} from 'react'
// Write your code here
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    if (speed >= 200) {
      this.setState({speed: 200})
    } else {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed <= 0) {
      this.setState({speed: 0})
    } else {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="background-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image-sizing"
          />
        </div>
        <h1 className="show-speed">Speed is {speed}mph</h1>
        <p className="para-heading">min limit is 0mph, max limit is 200mph</p>
        <div>
          <button
            type="button"
            className="accelerate-button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="apply-brakes"
            onClick={this.decreaseSpeed}
          >
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
