import React from 'react';
import { mount } from 'enzyme';

import { TextArea } from '../../src/components/Forms';

describe.only('TextArea Component', () => {
  let element;

  const mountComponent = (props) => {
    element = mount(<TextArea {...props} />);
  };

  describe('TextArea field renders in default state', () => {
    it('Given the component is mounted', () => mountComponent());
    it('Expect the label and placeholder to be empty', () => {
      expect(element.find('.form-label')).toHaveLength(0);
      expect(element.find('textarea.form-input').prop('placeholder')).toBe('');
      expect(element.prop('rows')).toEqual(3);
    });
  });

  describe('TextArea field renders with label and placeholder', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        label: 'TestLabel',
        placeholder: 'TestPlaceholder',
        rows: 4,
      });
    });
    it('Expect the label and placeholder to be rendered', () => {
      expect(element.find('.form-label').text()).toBe('TestLabel');
      expect(element.find('textarea.form-input').prop('placeholder')).toBe('TestPlaceholder');
      expect(element.prop('rows')).toEqual(4);
    });
  });

  describe('TextArea renders in disabled state', () => {
    it('Given the component is mounted with disabled prop set to true', () => {
      mountComponent({
        disabled: true,
      });
    });
    it('Expect the textarea renders in disabled state', () => {
      expect(element.find('textarea').prop('disabled')).toBeTruthy();
    });
  });

  describe('TextArea component renders with provided size', () => {
    it('Given the component is mounted with size prop set to a value', () => {
      mountComponent({
        label: 'Test',
        size: 'sm',
      });
    });
    it('Expect the textarea renders in specified size', () => {
      expect(element.find('.form-label').hasClass('label-sm')).toBeTruthy();
    });
  });
  
  describe('TextArea component renders with provided state', () => {
    it('Given the component is mounted with state prop set to a value', () => {
      mountComponent({
        state: 'error',
      });
    });
    it('Expect the form group renders in error state', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy();
    });
  });
  
  describe('TextArea component renders with provided state and state message', () => {
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
