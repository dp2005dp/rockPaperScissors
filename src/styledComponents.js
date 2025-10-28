import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width : 567px) {
     height: 100%;
  }
`
export const MainHeadong = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;

      @media screen and (min-width : 768px) {
          font-size: 40px;
      }
`

export const ResponsiveScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ScoreConatiner = styled.div`
  background-color: transparent;
  width: 600px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

   @media screen and (max-width : 567px) {
     width: 100%;
  }
`

export const GameInstruments = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width : 567px) {
    font-size: 15px;
  }
`

export const ScoreDisplayConatiner = styled.div`
  width: 90px;
  background-color: #ffffff;
  border-radius: 5px;
  border-width: 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width : 567px) {
     width: 80px;   
  }
`

export const ScoreContent = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width : 567px) {
     font-size: 15px; 
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0px;

  @media screen and (max-width : 567px) {
     font-size: 20px;
  }
`
export const GameFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const GameContainer = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;

  
`
export const GameListConatainer = styled.li`
  list-style-type: none;
  margin-left: 15px;
  margin-bottom: 15px;
`

export const ImageButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const GameIcons = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
export const YouOrOpponent = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`
export const WinOrLose = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
`
export const PlayAgainButton = styled.button`
  height: 30px;
  width: 180px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 15px;
  border-radius: 15px;
  border-width: 0px;
  cursor: pointer;
`
export const GameResultContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 0px;

   @media screen and (max-width : 567px) {
     width: 280px;
  }
`
export const RulesContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
   
`
export const RulesResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `

export const CloseIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`
export const RulesImage = styled.img`
  height: 400px;
  width: 450px;

    @media screen and (max-width : 567px) {
      height: 150px;
      width: 200px;
  }
`
export const RulesButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 15px;
  border-radius: 15px;
  border-width: 0px;
  cursor: pointer;
`
export const POpupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width : 567px) {
    margin-top : 40px;
  }
`