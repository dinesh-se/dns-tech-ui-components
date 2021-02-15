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
      expect(element.prop('rows')).toEqual(3);
    });
  });
});
