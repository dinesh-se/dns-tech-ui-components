const DEBUG_MODE = process.argv.includes('--debug')

const debugOptions = DEBUG_MODE ? {
  headless: false,
  slowMo: 100,
} : {}

module.exports = {
  launch: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
    ...debugOptions,
  }
}
