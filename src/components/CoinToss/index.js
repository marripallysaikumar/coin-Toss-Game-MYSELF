import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imgActive: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {headCount, tailsCount} = this.state

    if (tossResult === 0) {
      const latestHeads = headCount + 1
      this.setState({
        imgActive: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        headCount: latestHeads,
      })
    } else {
      const latestTails = tailsCount + 1
      this.setState({
        imgActive: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tailsCount: latestTails,
      })
    }
  }

  render() {
    const {imgActive, headCount, tailsCount} = this.state
    const tt = headCount + tailsCount
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgActive} alt="sita" className="img-setting1" />
          <div>
            <button type="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="nn">
            <p>total:{tt}</p>
            <p>Heads:{headCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
