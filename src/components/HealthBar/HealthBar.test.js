import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { HealthBar } from './HealthBar'

configure({ adapter: new Adapter() })


describe('HealthBar', () => {
  it('Expected HealthBar renders correctly', () => {
    shallow(<HealthBar />)
  })
})