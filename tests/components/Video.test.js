import React from 'react'
import { mount } from 'enzyme'

import { Video } from '../../src'

describe('Video component', () => {
  let element

  const mountComponent = props => {
    element = mount(<Video {...props} />)
  }

  describe('renders with source and responsive style', () => {
    it('Given the component is mounted with src', () => {
      mountComponent({
        src: './path/to/video'
      })
    })
    it('Expect the video tag to have src assinged and style responsive', () => {
      expect(element.find('video').hasClass('video-responsive')).toBeTruthy()
      expect(element.find('video').prop('src')).toEqual('./path/to/video')
    })
  })
  
  describe('renders with ratio', () => {
    it('Given the component is mounted with src', () => {
      mountComponent({
        ratio: '4:3'
      })
    })
    it('Expect the video has styles for 4:3 ratio', () => {
      expect(element.find('video').hasClass('video-responsive-4-3')).toBeTruthy()
    })
  })
})
