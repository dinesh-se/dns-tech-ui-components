import React from 'react';
import { mount } from 'enzyme';

import { Input } from '../../src/components/Forms';

describe.only('Input Component', () => {
  let element;

  const mountComponent = (props) => {
    element = mount(<Input {...props} />);
  };

  describe('Input component renders in default state', () => {
    it('Given the component is mounted', () => mountComponent());
    it('Expect the label and placeholder to be empty', () => {
      expect(element.find('.form-label')).toHaveLength(0);
      expect(element.find('input.form-input').prop('placeholder')).toBe('');
      expect(element.find('input.form-input').prop('type')).toBe('text');
      expect(element.find('input.form-input').prop('disabled')).toBeFalsy();
      expect(element.find('i')).toHaveLength(0);
    });
  });

  describe('Input component renders with label and placeholder', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        label: 'TestLabel',
        placeholder: 'TestPlaceholder',
      });
    });
    it('Expect the label and placeholder to be rendered', () => {
      expect(element.find('.form-label').text()).toBe('TestLabel');
      expect(element.find('input.form-input').prop('placeholder')).toBe('TestPlaceholder');
    });
  });

  describe('Input component renders in disabled state', () => {
    it('Given the component is mounted with disabled prop set to true', () => {
      mountComponent({
        disabled: true,
      });
    });
    it('Expect the input field is disabled', () => {
      expect(element.find('input.form-input').prop('disabled')).toBeTruthy();
    });
  });

  describe('Input component renders with icon and default position', () => {
    it('Given the component is mounted with iconName prop set to a value', () => {
      mountComponent({
        iconName: 'test-icon',
      });
    });
    it('Expect the input field has passed icon name and default position set', () => {
      expect(element.find('i').hasClass('test-icon')).toBeTruthy();
      expect(element.find('div.has-icon-right')).toHaveLength(1);
    });
  });
  
  describe('Input component renders with icon and position', () => {
    it('Given the component is mounted with icon name and position set', () => {
      mountComponent({
        iconName: 'test-icon',
        iconPosition: 'left',
      });
    });
    it('Expect the input field has passed icon name and default position set', () => {
      expect(element.find('i').hasClass('test-icon')).toBeTruthy();
      expect(element.find('div.has-icon-left')).toHaveLength(1);
    });
  });

  describe('Input component doesn\'t apply icon position when only position is passed', () => {
    it('Given the component is mounted with icon name and position set', () => {
      mountComponent({
        iconPosition: 'left',
      });
    });
    it('Expect the input field has passed icon name and default position set', () => {
      expect(element.find('div.has-icon-left')).toHaveLength(0);
      expect(element.find('div.has-icon-right')).toHaveLength(0);
    });
  });
  
  describe('Input component renders with loading in default position', () => {
    it('Given the component is mounted with loading prop set to true', () => {
      mountComponent({
        loading: true,
      });
    });
    it('Expect the input field has loading icon and default position set', () => {
      expect(element.find('i').hasClass('loading')).toBeTruthy();
      expect(element.find('div.has-icon-right')).toHaveLength(1);
    });
  });
  
  describe('Input component renders with loading in set position', () => {
    it('Given the component is mounted with loading prop set to true and position set', () => {
      mountComponent({
        loading: true,
        iconPosition: 'left',
      });
    });
    it('Expect the input field has loading icon and default position set', () => {
      expect(element.find('i').hasClass('loading')).toBeTruthy();
      expect(element.find('div.has-icon-left')).toHaveLength(1);
    });
  });

  describe('Input component renders with provided regex pattern', () => {
    it('Given the component is mounted with pattern prop set to a value', () => {
      mountComponent({
        pattern: '^\\d+$',
      });
    });
    it('Expect the input field renders with specified regex pattern', () => {
      expect(element.find('input.form-input').prop('pattern')).toBe('^\\d+$');
    });
  });
  
  describe('Input component renders with provided size', () => {
    it('Given the component is mounted with size prop set to a value', () => {
      mountComponent({
        size: 'sm',
      });
    });
    it('Expect the input field renders in specified size', () => {
      expect(element.find('input.form-input').hasClass('input-sm')).toBeTruthy();
    });
  });

  describe('Input component renders with provided size for label', () => {
    it('Given the component is mounted with size and label props set to a value', () => {
      mountComponent({
        label: 'Test',
        size: 'sm',
      });
    });
    it('Expect the input field and label renders in specified size', () => {
      expect(element.find('label.form-label').hasClass('label-sm')).toBeTruthy();
      expect(element.find('input.form-input').hasClass('input-sm')).toBeTruthy();
    });
  });
  
  describe('Input component renders with provided state', () => {
    it('Given the component is mounted with state prop set to a value', () => {
      mountComponent({
        state: 'success',
      });
    });
    it('Expect the form group renders in success state', () => {
      expect(element.find('div.form-group').hasClass('has-success')).toBeTruthy();
    });
  });
  
  describe('Input component renders with provided state and state message', () => {
    it('Given the component is mounted with state and stateMessage props set to a value', () => {
      mountComponent({
        state: 'error',
        stateMessage: 'Test Message',
      });
    });
    it('Expect the form group renders in success state', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy();
      expect(element.find('.form-input-hint').text()).toBe('Test Message');
    });
  });

  describe('Input component renders according to type passed', () => {
    it('Given the component is mounted with type set to date', () => {
      mountComponent({
        type: 'date',
      });
    });
    it('Expect the input field renders with type date', () => {
      expect(element.find('input.form-input').prop('type')).toBe('date');
    });
  });
});
