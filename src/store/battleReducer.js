export const initialState = {
  playerHealth: 100,
  playerLostHealth: 0,
  monsterLostHealth: 0,
  monsterHealth: 100,
  playerDice: {
    dice1: 1,
    dice2: 1
  },
  monsterDice: {
    dice1: 1,
    dice2: 1
  },
  battleText: 'Attack to start the game'
}

export const battleReducer = (state, { type, ...payload }) => {
  switch (type) {
    case 'attack':
      return {
        ...state,
        ...payload
      }
    case 'reset':
      return {
        playerHealth: 100,
        monsterHealth: 100,
        playerLostHealth: 0,
        monsterLostHealth: 0,
        playerDice: {
          dice1: 1,
          dice2: 1
        },
        monsterDice: {
          dice1: 1,
          dice2: 1
        },
      }
    default:
      return state
  }
}