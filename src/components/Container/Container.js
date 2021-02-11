import React, { useState, useReducer } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Dice } from '../Dice/Dice'
import { HealthBar } from '../HealthBar/HealthBar'
import { battleReducer, initialState } from '../../store/battleReducer'
const playerImage = '/images/stick-man.png'
const monsterImage = '/images/monster.jpg'

const generateDiceValue = () => Math.round(Math.random() * 100) % 6 + 1

export const Container = () => {

  const [{
    playerHealth,
    playerLostHealth,
    monsterHealth,
    monsterLostHealth,
    playerDice,
    monsterDice,
    battleText,
  }, dispatch] = useReducer(battleReducer, initialState)
  const [isGameEnd, setIsGameEnd] = useState(false)
  const [result, setResult] = useState(false)

  const handleAttack = () => {

	/**
	 * Roll the dices 
	*/
    const playerRoll = {
      dice1: generateDiceValue(),
      dice2: generateDiceValue(),
    }
    const monsterRoll = {
      dice1: generateDiceValue(),
      dice2: generateDiceValue(),
    }

  /**
	 * Calculate the point
	*/
    const point = (playerRoll.dice1 + playerRoll.dice2) - (monsterRoll.dice1 + monsterRoll.dice2)

  /**
	 * Update reducer payload
	*/
    const payload = {
      playerHealth: point < 0 ? playerHealth + point : playerHealth,
      monsterHealth: point > 0 ? monsterHealth - point : monsterHealth,
      playerLostHealth: point < 0 ? -point : 0,
      monsterLostHealth: point > 0 ? point : 0,
      playerDice: playerRoll,
      monsterDice: monsterRoll,
      battleText: point < 0 ? `Monster hit you for ${-point}` : point > 0 ? `You hit monster for ${point}` : 'Tied'
    }

	/**
	 * If player health is <= 0, game end, player loses
	*/
    if (payload.playerHealth <= 0) {
      payload.playerHealth = 0
      payload.battleText = 'Game Over'
      setResult('lose')
      setIsGameEnd(true)
    }

	/**
	 * If monster health is <= 0, game end, player win
	*/
    if (payload.monsterHealth <= 0) {
      payload.monsterHealth = 0
      payload.battleText = 'You Win'
      setResult('win')
      setIsGameEnd(true)
    }

	/**
	 * Dispatch and update the reducer
	*/
    dispatch({
      type: 'attack',
      ...payload
    })
  }

	/**
	 * Reset the states and reducers after the game is end
	*/
  const handleReset = () => {
    setResult('')
    setIsGameEnd(false)
    dispatch({ type: 'reset' })
  }

  return (
    <div className='app-container'>
      <div className='heading'>Battle Simulator</div>
      <div className='game-container'>
        <Row>
          <Col lg={4}>
            <div className='player-wrapper'>
              <img src={playerImage} alt='player' className='player-image' />
              <HealthBar health={playerHealth} lostHealth={playerLostHealth} id='health-bar-player' />
              <div className='dice-container'>
                <Dice value={playerDice.dice1} />
                <br />
                <Dice value={playerDice.dice2} />
              </div>
            </div>
            <div className='name'>
              Player
            </div>
          </Col>

          <Col lg={4}>
            <div className='fight-wrapper '>
              <div id='battle-text' className={`text  ${result === 'win' ? 'text-success' : result === 'lose' ? 'text-danger' : ''}`}>
                {battleText}
              </div>
              {isGameEnd ?
                <Button className='attack-btn' variant='success' onClick={() => handleReset()}>
                  Play again
                </Button> :
                <Button id='attack-button' className='attack-btn' onClick={() => handleAttack()}>
                  Attack!!!
              </Button>}
            </div>
          </Col>

          <Col lg={4}>
            <div className='player-wrapper '>
              <div className='dice-container'>
                <Dice value={monsterDice.dice1} />
                <br />
                <Dice value={monsterDice.dice2} />
              </div>
              <HealthBar health={monsterHealth} lostHealth={monsterLostHealth} id='health-bar-monster' />
              <img src={monsterImage} alt='player' className='player-image' />
            </div>
            <div className='name'>
              Monster
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}

