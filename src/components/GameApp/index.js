import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import NavBar from '../NavBar'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameApp extends Component {
  state = {
    score: 0,
    clickChoice: false,
    yourImg: '',
    oppImg: '',
  }

  clickRockChoiceItem = () => {
    const num = Math.floor(Math.random() * 3)
    const yourChoice = choicesList[0].imageUrl
    const oppChoice = choicesList[num].imageUrl
    if (
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png')
    ) {
      this.setState(prevState => ({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png')
    ) {
      this.setState(prevState => ({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'IT IS DRAW',
      })
    }
    this.renderGameResult()
  }

  clickScissorsChoiceItem = () => {
    const num = Math.floor(Math.random() * 3)
    const yourChoice = choicesList[1].imageUrl
    const oppChoice = choicesList[num].imageUrl
    if (
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png')
    ) {
      this.setState(prevState => ({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png')
    ) {
      this.setState(prevState => ({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'IT IS DRAW',
      })
    }
    this.renderGameResult()
  }

  clickPaperChoiceItem = () => {
    const num = Math.floor(Math.random() * 3)
    const yourChoice = choicesList[2].imageUrl
    const oppChoice = choicesList[num].imageUrl
    if (
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png')
    ) {
      this.setState(prevState => ({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png') ||
      (yourChoice ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        oppChoice ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png')
    ) {
      this.setState(prevState => ({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        clickChoice: true,
        yourImg: yourChoice,
        oppImg: oppChoice,
        gameResult: 'IT IS DRAW',
      })
    }
    this.renderGameResult()
  }

  clickPlayAgain = () => {
    this.setState({
      clickChoice: false,
      yourImg: '',
      oppImg: '',
      gameResult: '',
    })
  }

  renderGameResult = () => {
    const {yourImg, oppImg, gameResult} = this.state

    return (
      <>
        <div>
          <div>
            <p>YOU</p>
            <img src={yourImg} alt="your choice" className="img" />
          </div>
          <div>
            <p>OPPONENT</p>
            <img src={oppImg} alt="opponent choice" className="img" />
          </div>
          <div>
            <p>{gameResult}</p>
          </div>
          <button type="button" onClick={this.clickPlayAgain}>
            Play Again
          </button>
        </div>
      </>
    )
  }

  renderGame = () => {
    const {clickChoice} = this.state

    return (
      <>
        <div>
          <button
            type="button"
            data-testid="rockButton"
            onClick={this.clickRockChoiceItem}
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              className="img"
            />
          </button>
          <button
            type="button"
            data-testid="scissorsButton"
            onClick={this.clickScissorsChoiceItem}
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              className="img"
            />
          </button>
          <button
            type="button"
            data-testid="paperButton"
            onClick={this.clickPaperChoiceItem}
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="img"
            />
          </button>
        </div>
        <Popup modal trigger={<button type="button">RULES</button>}>
          {close => (
            <>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </>
          )}
        </Popup>
      </>
    )
  }

  render() {
    const {score, clickChoice} = this.state

    return (
      <div>
        <NavBar score={score} />
        {clickChoice ? this.renderGameResult() : this.renderGame()}
      </div>
    )
  }
}

export default GameApp
