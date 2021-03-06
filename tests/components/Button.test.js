import React from 'react'
import { shallow } from 'enzyme'

import { Button } from '../../src'

describe('Button component', () => {
  let element

  const mountComponent = (props = {}) => {
    element = shallow(<Button label='Test' {...props} />)
  }

  describe('Button default render', () => {
    it('Given the button component is rendered', () => mountComponent())
    it('Expect the button to have label', () => {
      expect(element.text()).toBe('Test')
    })
  })

  describe('Button render with variant', () => {
    it('Given the button component is rendered', () => {
      mountComponent({
        variant: 'primary',
      })
    })
    it('Expect the button to have variant class name', () => {
      expect(element.hasClass('btn-primary')).toBeTruthy()
    })
  })

  describe('Button render with size', () => {
    it('Given the button component is rendered', () => {
      mountComponent({
        size: 'block',
      })
    })
    it('Expect the button to have size class name', () => {
      expect(element.hasClass('btn-block')).toBeTruthy()
    })
  })

  describe('Button render with state', () => {
    it('Given the button component is rendered', () => {
      mountComponent({
        state: 'success',
      })
    })
    it('Expect the button to have state class name', () => {
      expect(element.hasClass('btn-success')).toBeTruthy()
    })
  })
  
  describe('Button render with loading set to true', () => {
    it('Given the button component is rendered with loading true', () => {
      mountComponent({
        loading: true,
      })
    })
    it('Expect the button to have loading class name', () => {
      expect(element.hasClass('loading')).toBeTruthy()
    })
  })

  describe('Button render with loading set to false', () => {
    it('Given the button component is rendered with loading false', () => {
      mountComponent({
        loading: false,
      })
    })
    it('Expect the button to not have loading class name', () => {
      expect(element.hasClass('loading')).toBeFalsy()
    })
  })

  describe('Button render in disabled state', () => {
    it('Given the button component is rendered with disabled true', () => {
      mountComponent({
        disabled: true,
      })
    })
    it('Expect the button to have disabled attribute', () => {
      expect(element.prop('disabled')).toBeTruthy()
      expect(element.find('button').prop('tabIndex')).toBeTruthy()
    })
  })

  describe('Button render with disabled false', () => {
    it('Given the button component is rendered with disabled false', () => {
      mountComponent({
        disabled: false,
      })
    })
    it('Expect the button to have disabled attribute', () => {
      expect(element.prop('disabled')).toBeFalsy()
      expect(element.find('button').prop('tabIndex')).toBeFalsy()
    })
  })

  describe('Button render with on click handler', () => {
    const onClickHandler = jest.fn()
  
    it('Given the button component is rendered with on click handler', () => {
      mountComponent({
        onClick: onClickHandler,
      })
    })
    it('When the button is clicked', () => {
      element.simulate('click')
    })
    it('Expect the on click handle to have called', () => {
      expect(onClickHandler).toHaveBeenCalled()
    })
  })

  describe('Button renders with icon', () => {
    it('Given the button component is rendered with icon name', () => {
      mountComponent({
        Label: 'Test',
        iconName: 'test-icon',
      })
    })
    it('Expect the icon to be present inside button', () => {
      expect(element.find('i.icon').hasClass('test-icon')).toBeTruthy()
    })
  })
  
  describe('Button renders with icon in square', () => {
    it('Given the button component is rendered with icon name and shape', () => {
      mountComponent({
        iconName: 'test-icon',
        shape: 'square',
      })
    })
    it('Expect the icon to be present inside a square button', () => {
      expect(element.hasClass('btn-action')).toBeTruthy()
      expect(element.find('i.icon').hasClass('test-icon')).toBeTruthy()
    })
  })

  describe('Button renders with icon in circle', () => {
    it('Given the button component is rendered with icon name and shape', () => {
      mountComponent({
        iconName: 'test-icon',
        shape: 'circle',
      })
    })
    it('Expect the icon to be present inside a circle button', () => {
      expect(element.hasClass('btn-action s-circle')).toBeTruthy()
      expect(element.find('i.icon').hasClass('test-icon')).toBeTruthy()
    })
  })

  describe('Button renders with badge', () => {
    it('Given the button component is rendered with badge set to true', () => {
      mountComponent({
        badge: true,
      })
    })
    it('Expect the button has class for badge applied', () => {
      expect(element.hasClass('badge')).toBeTruthy()
    })
  })

  describe('Button renders with badge text', () => {
    it('Given the button component is rendered with badge set to true', () => {
      mountComponent({
        badgeText: 100,
      })
    })
    it('Expect the button has class for badge applied and data attr for badge text is displayed', () => {
      expect(element.hasClass('badge')).toBeTruthy()
      expect(element.prop('data-badge')).toBe(100)
    })
  })
})
