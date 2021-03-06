import React from 'react'
import { mount } from 'enzyme'

import { Avatar } from '../../src'

describe('Avatar Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <Avatar
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('img')).toHaveLength(0)
      expect(element.find('i')).toHaveLength(0)
    })
  })

  describe('renders in with initials passed', () => {
    it('Given the component is mounted with initial set to a value', () => {
      mountComponent({
        initial: 'TS'
      })
    })
    it('Expect the component renders with data attr for initial', () => {
      expect(element.find('figure').prop('data-initial')).toBe('TS')
    })
  })

  describe('renders in provided size', () => {
    it('Given the component is mounted with size set to large', () => {
      mountComponent({
        size: 'lg',
      })
    })
    it('Expect the avatar has class for large size', () => {
      expect(element.find('figure').hasClass('avatar-lg')).toBeTruthy()
    })
  })

  describe('renders with image', () => {
    it('Given the component is mounted with src for the image provided', () => {
      mountComponent({
        src: './path/to/image',
      })
    })
    it('Expect the avatar has source for the image provided', () => {
      expect(element.find('img').prop('src')).toBe('./path/to/image')
    })
  })

  describe('renders with online status', () => {
    it('Given the component is mounted with presence set to busy', () => {
      mountComponent({
        presence: 'busy',
      })
    })
    it('Expect the avatar has class for busy status', () => {
      expect(element.find('i.avatar-presence').hasClass('busy')).toBeTruthy()
    })
  })

  describe('renders with badge', () => {
    it('Given the component is mounted with badge set to true', () => {
      mountComponent({
        badge: true,
      })
    })
    it('Expect the avatar has class for badge', () => {
      expect(element.find('figure').hasClass('badge')).toBeTruthy()
    })
  })

  describe('renders with badge text', () => {
    it('Given the component is mounted with badge text set to a value', () => {
      mountComponent({
        badgeText: 10,
      })
    })
    it('Expect the avatar has class for badge and badge text passed to attr', () => {
      expect(element.find('figure').hasClass('badge')).toBeTruthy()
      expect(element.find('figure').prop('data-badge')).toBe(10)
    })
  })
})
