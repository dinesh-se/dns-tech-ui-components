import React from 'react';
import { mount } from 'enzyme';

import { Switch } from '../../src/components/Forms';

describe('Switch component', () => {
  let element;

  const mountComponent = (props) => {
    element = mount(<Switch {...props} />);
  };

  describe('Switch component renders in default state', () => {
    it('Given the component renders in default state', () => mountComponent());
    it('Expect the component to have default render', () => {
      expect(element.find('.form-switch input').prop('checked')).toBeFalsy();
    });
  });
  
  describe('Switch component renders with label for group', () => {
    it('Given the component is rendered with label prop set to a value', () => {
      mountComponent({
        label: 'Test Label',
      });
    });
    it('Expect the Select Component rendered with label', () => {
      expect(element.find('.form-switch').text()).toBe('Test Label');
    });
  });
  
  describe('Switch component renders in disabled state', () => {
    it('Given the component is rendered with disabled prop set to true', () => {
      mountComponent({
        disabled: true,
      });
    });
    it('Expect the Select component rendered in disabled state', () => {
      expect(element.find('.form-switch input').prop('disabled')).toBeTruthy();
    });
  });

  describe('Switch component renders with provided size', () => {
    it('Given the component is mounted with size prop set to a value', () => {
      mountComponent({
        size: 'sm',
      });
    });
    it('Expect the Switch component renders in specified size', () => {
      expect(element.find('label.form-switch').hasClass('input-sm')).toBeTruthy();
      expect(element.find('label.form-switch').hasClass('label-sm')).toBeTruthy();
    });
  });
  
  describe('Switch component renders with provided state', () => {
    it('Given the component is mounted with state prop set to a value', () => {
      mountComponent({
        state: 'error',
      });
    });
    it('Expect the form group renders in error state', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy();
    });
  });
  
  describe('Switch component renders with provided state and state message', () => {
    it('Given the component is mounted with state and stateMessage props set to a value', () => {
      mountComponent({
        state: 'error',
        stateMessage: 'Test Message',
      });
    });
    it('Expect the form group renders in error state and message', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy();
      expect(element.find('.form-input-hint').text()).toBe('Test Message');
    });
  });
});
