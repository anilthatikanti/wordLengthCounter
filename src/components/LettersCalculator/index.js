// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {value: ''}

  onchangeItem = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state
    return (
      <div className="container">
        <div className="text">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="heading" htmlFor="phraseText">
            Enter the Phrase
          </label>
          <input
            type="text"
            className="searchInput"
            placeholder="Enter the Phrase"
            id="phraseText"
            onChange={this.onchangeItem}
            value={value}
          />
          <div className="valueHighlighter">
            <p>No.of letters: {value.length}</p>
          </div>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="Letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
