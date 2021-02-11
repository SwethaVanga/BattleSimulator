import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Container } from './Container'

configure({ adapter: new Adapter() })


describe('Container', () => {
  it('Expected Container renders correctly', () => {
    shallow(<Container />)
  })

  it('Expected battle text to be rendered when the attack button is clicked', () => {
    const wrapper = shallow(<Container />)
    const button = wrapper.find('#attack-button')
    button.simulate('click')
    expect(wrapper.find('#battle-text').text()).toEqual(expect.stringMatching(/^(Monster hit you for|You hit monster for|Tied)/))
  })

  it('Expected player, monster, or none to lose health when lose the roll', () => {
    const wrapper = shallow(<Container />)
    const button = wrapper.find('#attack-button')
    button.simulate('click')
    const battleText = wrapper.find('#battle-text').text()
    const monster = wrapper.find('#health-bar-monster')
    const player = wrapper.find('#health-bar-player')

    if (battleText.includes('You hit monster for')) {
      expect(monster.props()['lostHealth']).toBeGreaterThan(0)
      expect(monster.props()['health']).toBeLessThan(100)

    } else if (battleText.includes('Monster hit you for')) {
      expect(player.props()['lostHealth']).toBeGreaterThan(0)
      expect(player.props()['health']).toBeLessThan(100)

    } else {
      expect(monster.props()['lostHealth']).toEqual(0)
      expect(player.props()['lostHealth']).toEqual(0)
      expect(monster.props()['health']).toEqual(100)
      expect(player.props()['health']).toEqual(100)
    }
  })

  it('Expected You Win or Game over when the monster has health 0', () => {
    const wrapper = shallow(<Container />)
    let monsterHealth = wrapper.find('#health-bar-monster').props()['health']
    let playerHealth = wrapper.find('#health-bar-player').props()['health']

    if (monsterHealth <= 0) {
      expect(wrapper.find('#battle-text').text()).toEqual(expect.stringMatching(/^(You Win)/))
    }

    if (playerHealth <= 0) {
      expect(wrapper.find('#battle-text').text()).toEqual(expect.stringMatching(/^(Game Over)/))
    }
  })
})