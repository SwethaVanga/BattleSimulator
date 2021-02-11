import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dice } from './Dice'

configure({ adapter: new Adapter() })


describe('Dice', () => {
  it('Expected Dice renders correctly', () => {
    shallow(<Dice />)
  })
})