import React from 'react';

import { centerDecorator } from '../../.storybook/decorator';

export default {
  title: 'Examples',
  decorators: [centerDecorator]
};

export const InputGroups = () => (
  <div className='input-group'>
    <span className='input-group-addon'>Addon</span>
    <input type='text' className='form-input' placeholder='Placeholder' />
    <button className='btn btn-primary input-group-btn'>Submit</button>
  </div>
);
