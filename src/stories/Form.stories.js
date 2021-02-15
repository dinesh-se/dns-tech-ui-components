import React from 'react';

import { centerDecorator } from '../../.storybook/decorator';
import { Input as InputComponent } from '../components/Forms';
import { TextArea as TextAreaComponent } from '../components/Forms';

export default {
  title: 'Components/Forms',
  decorators: [centerDecorator]
};

const InputTemplate = (args) => <InputComponent {...args} />;
export const Input = InputTemplate.bind({});
Input.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};

const TextAreaTemplate = (args) => <TextAreaComponent {...args} />;
export const TextArea = TextAreaTemplate.bind({});
TextArea.args = {
  label: 'Message',
  placeholder: 'Textarea',
  rows: 5,
};
