import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: 'percent',
})

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `file:///${path.join(__dirname, '..', 'storybook-static')}`,
    getMatchOptions,
  }),
})
