import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { FormInput as InputComponent } from '../index'
import { FormTextArea as TextAreaComponent } from '../index'
import { FormSelect as SelectComponent } from '../index'
import { FormRadio as RadioComponent } from '../index'
import { FormSwitch as SwitchComponent } from '../index'
import { FormCheckbox as CheckboxComponent } from '../index'

const selectOptions = ['Slack', 'Skype', 'Hipchat']
const radioOptions = ['Male', 'Female']

export const SampleForm = () => (
  <form>
    <fieldset>
      <InputComponent label="Name" placeholder="Name" />
      <RadioComponent label="Gender" name="gender" options={radioOptions} />
      <SelectComponent options={selectOptions} />
      <SwitchComponent label="Send me emails with news and tips" />
      <TextAreaComponent label="Message" placeholder="Textarea" />
      <CheckboxComponent label="Remember me" />
    </fieldset>
  </form>
)

export default {
  title: 'Elements/Forms',
  component: SampleForm,
  subcomponents: { 
    InputComponent, 
    TextAreaComponent,
    SelectComponent,
    RadioComponent,
    SwitchComponent,
    CheckboxComponent,
  },
  decorators: [centerDecorator]
}

const size = {
  control: {
    type: 'inline-radio',
    options: ['sm', 'lg']
  }
}

const InputTemplate = (args) => <InputComponent {...args} />
export const Input = InputTemplate.bind({})
Input.args = {
  disabled: false,
  iconName: '',
  label: 'Label',
  loading: false,
  pattern: '',
  placeholder: 'Placeholder',
  stateMessage: '',
  type: 'text',
}
Input.argTypes = {
  iconPosition: {
    control: {
      type: 'inline-radio',
      options: ['left', 'right'],
    }
  },
  size,
  state: {
    control: {
      type: 'inline-radio',
      options: ['success', 'error'],
    }
  },
  type: {
    control: {
      type: 'inline-radio',
      options: [
        'text',
        'email',
        'url',
        'search',
        'tel',
        'password',
        'number',
        'date',
        'color',
        'file',
      ],
    }
  }
}

const TextAreaTemplate = (args) => <TextAreaComponent {...args} />
export const TextArea = TextAreaTemplate.bind({})
TextArea.args = {
  disabled: false,
  label: 'Message',
  placeholder: 'Textarea',
  rows: 5,
  stateMessage: '',
}
TextArea.argTypes = {
  rows: {
    control: {
      type: 'number',
      min: 1,
    }
  },
  size,
  state: {
    control: {
      type: 'inline-radio',
      options: ['success', 'error'],
    }
  },
}

const SelectTemplate = args => <SelectComponent {...args} />
export const Select = SelectTemplate.bind({})
Select.args = {
  disabled: false,
  label: 'Source',
  multiple: false,
  options: selectOptions,
  stateMessage: '',
}
Select.argTypes = {
  size,
  state: {
    control: {
      type: 'inline-radio',
      options: ['success', 'error'],
    }
  },
}

const RadioTemplate = args => <RadioComponent {...args} />
export const Radio = RadioTemplate.bind({})
Radio.args = {
  disabled: false,
  inline: false,
  label: 'Gender',
  name: 'gender',
  options: radioOptions,
  stateMessage: '',
}
Radio.argTypes = {
  size,
  state: {
    control: {
      type: 'inline-radio',
      options: ['error'],
    }
  },
}

const SwitchTemplate = args => <SwitchComponent {...args} />
export const Switch = SwitchTemplate.bind({})
Switch.args = {
  disabled: false,
  label: 'Send me emails with news and tips',
  stateMessage: '',
}
Switch.argTypes = {
  size,
  state: {
    control: {
      type: 'inline-radio',
      options: ['error'],
    }
  },
}

const CheckboxTemplate = args => <CheckboxComponent {...args} />
export const Checkbox = CheckboxTemplate.bind({})
Checkbox.args = {
  disabled: false,
  indeterminate: false,
  inline: false,
  label: 'Remember me',
  stateMessage: '',
}
Checkbox.argTypes = {
  size,
  state: {
    control: {
      type: 'inline-radio',
      options: ['error'],
    }
  },
}
