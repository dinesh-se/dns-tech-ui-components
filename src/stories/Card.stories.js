import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import {
  Button,
  Card,
  CardImage,
  CardHeader,
  CardBody,
  CardFooter,
} from '../../src'

export default {
  title: 'Components/Card',
  subcomponents: {
    Card,
    CardImage,
    CardHeader,
    CardBody,
    CardFooter,
  },
  decorators: [centerDecorator],
}

const otherContents = (
  <Button className="float-right" iconName="icon-plus" variant="primary" />
)
export const Examples = () => (
  <div className="container">
    <div className="columns">
      <div className="column col-6 col-xs-12">
        <Card>
          <CardImage src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
          <CardHeader
            title="Microsoft"
            subtitle="Software and hardware"
          />
          <CardBody>
            Empower every person and every organization on the planet to achieve more.
          </CardBody>
          <CardFooter>
            <Button label="Do" variant="primary" />
          </CardFooter>
        </Card>
      </div>
      <div className="column col-6 col-xs-12">
        <Card>
          <CardHeader title="Apple" subtitle="Hardware and software" />
          <CardImage src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" />
          <CardBody>
            To make a contribution to the world by making tools for the mind that advance humankind.
          </CardBody>
          <CardFooter>
            <div className="btn-group btn-group-block">
              <Button label="Buy" variant="primary" />
              <Button label="Buy" />
              <Button label="Buy" />
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="column col-6 col-xs-12">
        <Card>
          <CardImage src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg" />
          <CardHeader title="Google I/O" subtitle="Hardware and software" otherContents={otherContents} />
          <CardBody>
            An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.
          </CardBody> 
        </Card>
      </div>
      <div className="column col-6 col-xs-12">
        <Card>
          <CardImage src="https://picturepan2.github.io/spectre/img/osx-el-capitan-2.jpg" />
          <CardFooter>
            <Button label="Buy" variant="primary" />
            <Button label="Share" variant="link" />
          </CardFooter>
          <CardBody>
            <strong>Surface Studio</strong>. Turn your desk into a Studio. Surface Studio is designed for the creative process.
          </CardBody>
        </Card>
      </div>
      <div className="column col-6 col-xs-12">
        <Card>
          <CardHeader title="Apple" subtitle="Hardware and software" />
          <CardBody>
            To make a contribution to the world by making tools for the mind that advance humankind.
          </CardBody>
          <CardImage src="https://picturepan2.github.io/spectre/img/macos-sierra.jpg" />
        </Card>
      </div>
      <div className="column col-6 col-xs-12">
        <Card>
          <CardHeader title="Google" subtitle="Hardware and software" />
          <CardBody>
            Organize the world’s information and make it universally accessible and useful.
          </CardBody>
          <CardImage src="https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg" />
          <CardFooter>
            <Button label="Search" variant="primary" />
            <Button label="Share" variant="link" />
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
)
