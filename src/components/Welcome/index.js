// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isClickSubscribe: true,
  }

  onClickSubscribe = () => {
    this.setState(prevState => ({
      isClickSubscribe: !prevState.isClickSubscribe,
    }))
  }

  getButtonTextDisplay = () => {
    const {isClickSubscribe} = this.state

    return isClickSubscribe ? 'Subscribe' : 'subscribed'
  }

  render() {
    const buttonTextEle = this.getButtonTextDisplay()

    return (
      <div className="card-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thankyou!Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.onClickSubscribe}
        >
          {buttonTextEle}
        </button>
      </div>
    )
  }
}

export default Welcome
