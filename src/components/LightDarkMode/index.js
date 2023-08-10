// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onClickButton = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const containerBackground = isLightMode ? 'light-mode' : 'dark-mode'
    const buttonText = isLightMode ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="light-dark-mode-bg-container">
        <div className={`light-dark-mode-container ${containerBackground}`}>
          <h1 className="light-dark-mode-heading">Click To Change Mode</h1>
          <button
            className="light-dark-mode-button"
            onClick={this.onClickButton}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
