import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { CounterPage } from '../src/pages/counter'

const increment = jest.fn()
const decrement = jest.fn()
const props = { increment, decrement }
const component = (<CounterPage {...props} />)


describe('Counter', () => {
  describe('Rendering', () => {
    it('renders according to design', () => {
      const tree = renderer.create(component).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('Events', () => {
    const wrapper = shallow(component)

    beforeEach(() => {
      increment.mockReset()
      decrement.mockReset()
    })

    describe('when click on up button', () => {
      it('calls increment function', () => {
        wrapper.find('button').first().simulate('click')

        expect(increment).toBeCalled()
      })
    })

    describe('when click on down button', () => {
      it('calls decrement function', () => {
        wrapper.find('button').last().simulate('click')

        expect(decrement).toBeCalled()
      })
    })
  })
})
