import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  AppContainer,
  ResponsiveScoreContainer,
  MainHeadong,
  ScoreConatiner,
  GameInstruments,
  ScoreDisplayConatiner,
  ScoreContent,
  Score,
  GameFlexContainer,
  GameContainer,
  GameListConatainer,
  ImageButton,
  GameIcons,
  GameResultContainer,
  YouOrOpponent,
  WinOrLose,
  PlayAgainButton,
  RulesContainer,
  RulesResponsiveContainer,
  CloseIconContainer,
  RulesImage,
  RulesButton,
  POpupContainer,
} from './styledComponents'

import './App.css'

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

class App extends Component {
  state = {
    gameResult: false,
    youIconData: [],
    opponentIconIndex: '',
    resultText: '',
    score: 0,
    isRules: true,
  }

  playagainGame = () => {
    this.setState({gameResult: false, isRules: true})
  }

  generateImage = id => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const findImage = choicesList.find(eachItem => eachItem.id === id)
    const opponentIconData = choicesList[randomIndex]

    let result = ''
    let renderScore = 0
    if (findImage.id === opponentIconData.id) {
      result = 'IT IS DRAW'
    } else if (
      (findImage.id === 'ROCK' && opponentIconData.id === 'SCISSORS') ||
      (findImage.id === 'SCISSORS' && opponentIconData.id === 'PAPER') ||
      (findImage.id === 'PAPER' && opponentIconData.id === 'ROCK')
    ) {
      result = 'YOU WON'
      renderScore = 1
    } else {
      result = 'YOU LOSE'
      renderScore = -1
    }

    this.setState(prevState => ({
      gameResult: true,
      youIconData: findImage,
      opponentIconIndex: randomIndex,
      resultText: result,
      score: prevState.score + renderScore,
      isRules: false,
    }))
  }

  gameResultView = () => {
    const {youIconData, opponentIconIndex, resultText} = this.state
    const opponentIconData = choicesList[opponentIconIndex]

    return (
      <GameFlexContainer>
        <GameResultContainer>
          <div>
            <YouOrOpponent>YOU</YouOrOpponent>
            <GameIcons
              height='100'
              width='100'
              src={youIconData.imageUrl}
              alt='your choice'
            />
          </div>

          <div>
            <YouOrOpponent>OPPONENT</YouOrOpponent>
            <GameIcons
              height='100'
              width='100'
              src={opponentIconData.imageUrl}
              alt='opponent choice'
            />
          </div>
        </GameResultContainer>
        <WinOrLose>{resultText}</WinOrLose>
        <PlayAgainButton type='button' onClick={this.playagainGame}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameFlexContainer>
    )
  }

  gameViewContainer = () => (
    <GameContainer>
      {choicesList.map(eachItem => {
        let testid = ''
        if (eachItem.id === 'ROCK') testid = 'rockButton'
        if (eachItem.id === 'SCISSORS') testid = 'scissorsButton'
        if (eachItem.id === 'PAPER') testid = 'paperButton'
        console.log(testid)
        return (
          <GameListConatainer key={eachItem.id}>
            <ImageButton
              type='button'
              onClick={() => this.generateImage(eachItem.id)}
              data-testid={testid}
            >
              <GameIcons
                height='100'
                width='100'
                src={eachItem.imageUrl}
                alt={eachItem.id}
              />
            </ImageButton>
          </GameListConatainer>
        )
      })}
    </GameContainer>
  )

  popup = () => (
    <Popup
      modal
      trigger={
        <POpupContainer>
          <RulesButton>Rules</RulesButton>
        </POpupContainer>
      }
    >
      {close => (
        <RulesContainer>
          <CloseIconContainer>
            <ImageButton type='button' onClick={() => close()}>
              <RiCloseLine size={50} />
            </ImageButton>
          </CloseIconContainer>

          <RulesResponsiveContainer>
            <RulesImage
              src='https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'
              alt='rules'
            />
          </RulesResponsiveContainer>
        </RulesContainer>
      )}
    </Popup>
  )

  render() {
    const {gameResult, score, isRules} = this.state
    return (
      <AppContainer>
      {isRules && <MainHeadong>Rock Paper Scissors</MainHeadong>}  
        <ResponsiveScoreContainer>
          <ScoreConatiner>
            <div>
              <GameInstruments>ROCK</GameInstruments>
              <GameInstruments>PAPER</GameInstruments>
              <GameInstruments>SCISSORS</GameInstruments>
            </div>
            <ScoreDisplayConatiner>
              <ScoreContent>Score</ScoreContent>
              <Score>{score}</Score>
            </ScoreDisplayConatiner>
          </ScoreConatiner>
        </ResponsiveScoreContainer>
        <GameFlexContainer>
          {gameResult ? this.gameResultView() : this.gameViewContainer()}
        </GameFlexContainer>
        {isRules && this.popup()}
      </AppContainer>
    )
  }
}

export default App
