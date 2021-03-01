import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { Figure as FigureComponent } from '../../src'

export default {
  title: 'Elements/Media',
  component: Figure,
  decorators: [centerDecorator],
}

const imageStyles = `
  background: #f8f9fa;
  height: 15rem;
  width: 20rem;
`

const FigureTemplate = args => <FigureComponent {...args} />
export const Figure = FigureTemplate.bind({})
Figure.args = {
  src: 'https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
  altText: 'macOS El Capitan wallpaper',
  fit: 'cover',
  imageStyles,
  caption: 'macOS El Capitan wallpaper',
}
Figure.argTypes = {
  captionPosition: {
    control: {
      type: 'inline-radio',
      options: ['center', 'left', 'right'],
    }
  },
  fit: {
    control: {
      type: 'inline-radio',
      options: ['contain', 'cover', 'responsive'],
    }
  }
}
