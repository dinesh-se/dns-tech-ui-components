import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { 
  ProgressBar as ProgressBarComponent,
  SliderBar as SliderBarComponent,
} from '../../src'

export default {
  title: 'Components/Bar',
  subcomponents: {
    ProgressBarComponent,
    SliderBarComponent,
  },
  decorators: [centerDecorator],
}

const ProgressBarTemplate = args => <ProgressBarComponent {...args} />
export const ProgressBar = ProgressBarTemplate.bind({})
ProgressBar.args = {
  displayProgress: false,
  progress: 25,
  small: false,
  tooltip: false,
}
ProgressBar.argTypes = {
  progress: {
    control: {
      type: 'range',
    }
  }
}

const SliderBarTemplate = args => <SliderBarComponent {...args} />
export const SliderBar = SliderBarTemplate.bind({})
SliderBar.args = {
  range: 10,
  tooltip: true,
  toRange: null,
}
SliderBar.argTypes = {
  range: {
    control: {
      type: 'range',
    }
  },
  toRange: {
    control: {
      type: 'range',
    }
  }
}
