import React from 'react';
import { mount } from 'enzyme';

import { FormSelect } from '../../src';

describe('Select component', () => {
  let element;
  const options = ['Select 1', 'Select 2'];

  const mountComponent = (props) => {
    element = mount(<FormSelect options={options} {...props} />);
  };

  describe('Select component renders in default state', () => {
    it('Given the component is rendered', () => mountComponent());
    it('Expect the component is rendered in default state', () => {
      expect(element.find('.form-select')).toHaveLength(1);
      expect(element.find('.form-label')).toHaveLength(0);
      expect(element.find('.form-select').prop('disabled')).toBeFalsy();
      expect(element.find('.form-select').prop('multiple')).toBe(undefined);
    });
  });
  
  describe('Select component renders with multiple selection enabled', () => {
    it('Given the component is rendered with prop multiple set to true', () => {
      mountComponent({
        multiple: true,
      });
    });
    it('Expect the component is rendered with options for multiple selection', () => {
      expect(element.find('.form-select').prop('multiple')).toBeTruthy();
    });
  });
  
  describe('Select component renders with label for select dropdown', () => {
    it('Given the component is rendered with prop label set to a value', () => {
      mountComponent({
        label: 'Test Label',
      });
    });
    it('Expect the component is rendered with options for multiple selection', () => {
      expect(element.find('.form-label').text()).toBe('Test Label');
    });
  });

  describe('Select component renders in disabled state', () => {
    it('Given the component is rendered with prop label set to a value', () => {
      mountComponent({
        disabled: true,
      });
    });
    it('Expect the component is rendered in disabled state', () => {
      expect(element.find('.form-select').prop('disabled')).toBeTruthy();
    });
  });

  describe('Select component renders with provided size', () => {
    it('Given the component is mounted with size prop set to a value', () => {
      mountComponent({
        label: 'Test',
        size: 'sm',
      });
    });
    it('Expect the select dropdown renders in specified size', () => {
      expect(element.find('.form-select').hasClass('select-sm')).toBeTruthy();
      expect(element.find('label.form-label').hasClass('label-sm')).toBeTruthy();
    });
  });
  
  describe('Select component renders with provided state', () => {
    it('Given the component is mounted with state prop set to a value', () => {
      mountComponent({
        state: 'error',
      });
    });
    it('Expect the form group renders in error state', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy();
    });
  });
  
  describe('Select component renders with provided state and state message', () => {
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
