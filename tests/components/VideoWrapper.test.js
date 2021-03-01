import React from 'react'
import { mount } from 'enzyme'

import { VideoWrapper } from '../../src'


describe('VideoWrapper component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <VideoWrapper {...props}>
        <p>video source in a iframe</p>
      </VideoWrapper>
    )
  }

  describe('renders as renponsive wrapper with children', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the wrapper div to have styles for responsive video', () => {
      expect(element.find('div').hasClass('video-responsive')).toBeTruthy()
      expect(element.find('div').children()).toHaveLength(1)
    })
  })

  describe('renders with ratio', () => {
    it('Given the component is mounted with custom ratio', () => {
      mountComponent({
        ratio: '1:1'
      })
    })
    it('Expect the wrapper div to have styles for custom ratio', () => {
      expect(element.find('div').hasClass('video-responsive-1-1')).toBeTruthy()
    })
  })
})
