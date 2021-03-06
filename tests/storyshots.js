import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: 'percent',
})

const beforeScreenshot = (page) => {
  return page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
  })
}

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `file:///${path.join(__dirname, '..', 'storybook-static')}`,
    beforeScreenshot,
    getMatchOptions,
  }),
})
