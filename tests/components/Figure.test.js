import React from 'react'
import { mount } from 'enzyme'

import { Figure } from '../../src'

describe('Figure component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <Figure
        src="./path/to/image"
        altText="test text"
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the img tag is renders with correct attrs', () => {
      expect(element.find('img').prop('src')).toEqual('./path/to/image')
      expect(element.find('img').prop('alt')).toEqual('test text')
    })
  })

  describe('renders in responsive mode', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        fit: 'responsive'
      })
    })
    it('Expect the img tag has class for responsive image', () => {
      expect(element.find('img').hasClass('img-responsive')).toBeTruthy()
    })
  })

  describe('renders as cover', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        fit: 'cover'
      })
    })
    it('Expect the img tag has class for cover image', () => {
      expect(element.find('img').hasClass('img-fit-cover')).toBeTruthy()
    })
  })

  describe('renders with caption', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        caption: 'test caption'
      })
    })
    it('Expect the figure caption to be rendered in center position', () => {
      expect(element.find('figcaption').text()).toBe('test caption')
      expect(element.find('figcaption').hasClass('text-center')).toBeTruthy()
    })
  })

  describe('renders with caption and position', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        caption: 'test caption',
        captionPosition: 'right',
      })
    })
    it('Expect the figure caption to be rendered in center position', () => {
      expect(element.find('figcaption').hasClass('text-right')).toBeTruthy()
    })
  })
})
