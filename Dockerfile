FROM buildkite/puppeteer:latest

RUN mkdir /app

WORKDIR /app
RUN mkdir .storybook
RUN mkdir test-utils

COPY package.json yarn.lock babel.config.js jest.config.storyshots.json ./
COPY .storybook ./.storybook
COPY test-utils ./test-utils

RUN yarn install --frozen-lockfile && yarn cache clean
