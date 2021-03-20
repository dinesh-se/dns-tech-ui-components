# @dns-tech/ui-components
UI components library built with [React](https://reactjs.org/) and [spectre.css](https://picturepan2.github.io/spectre/) css framework

[Storybook URL](https://main--60337a40b7016200231bd952.chromatic.com) :tada:

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install UI components.
```
npm i @dns-tech/ui-components
```
## Example Usage
```
import { Button } from '@dns-tech/ui-components';
```

## Storyshots Testing
Storyshots testing runs in a docker container. Since chromatic already has visual regression testing as part of the build process, explicit testing script is removed from the build and deployment process. But keeping the code in the repo for any future use cases.

To run image snapshot testing locally, run `yarn test:visual`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
This project is offered under [MIT](https://github.com/dinesh-se/ds-tech-ui-components/blob/main/LICENSE).
