import React from 'react';
import { mount } from 'enzyme';

import { Input } from '../../src/components/Forms';

describe.only('Input Component', () => {
  let element;

  const mountComponent = (props) => {
    element = mount(<Input {...props} />);
  };

  describe('Input field renders in default state', () => {
    it('Given the component is mounted', () => mountComponent());
    it('Expect the label and placeholder to be empty', () => {
      expect(element.find('.form-label')).toHaveLength(0);
      expect(element.find('input.form-input').prop('placeholder')).toBe('');
    });
  });

  describe('Input field renders with label and placeholder', () => {
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
});
