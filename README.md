# react-app-loader [![github](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/entria/react-app-loader/issues)
Production ready library for handling Microfrontends.

## [Demo](https://entria.github.io/react-app-loader/) and [Example](https://github.com/jgcmarins/react-app-loader/tree/master/example/my-awesome-app)
![Preview](https://media.giphy.com/media/1nayvq5bkYeqiuVWds/giphy.gif)

## How to use

### Create a config file for each external app:
```
$ touch AnyExternalApp.js
```

### Then, wrap it with `withAppLoader` [HOC](https://reactjs.org/docs/higher-order-components.html):
```jsx
// @flow

import withAppLoader from '@entria/react-app-loader';

const elementId = 'github';
const appUrl = 'https://github.com/';

const AppLoader = withAppLoader({ elementId, appUrl });

export default AppLoader;

```

#### Or you can try a more complex way, passing some `props`:
```jsx
// @flow

import React from 'react';
import withAppLoader from '@entria/react-app-loader';

const elementId = 'github';
const appUrl = 'https://github.com/';

type Props = {
  externalUrl: string,
};

const AnyExternalApp = (props: Props) => {
  const { externalUrl } = props;
  const AppLoader = withAppLoader({
    elementId,
    appUrl: externalUrl != null && externalUrl.length > 0 ? externalUrl : appUrl
  });
  return <AppLoader />;
};

export default AnyExternalApp;

```

### Import it on your React app:
```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AnyExternalApp from './AnyExternalApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnyExternalApp />
      </div>
    );
  }
}

export default App;
```

### Import `babel-polyfill` on your `index.js`
```jsx
import 'babel-polyfill';
```

### Run \o/

## License
[MIT](https://github.com/entria/react-app-loader/blob/master/LICENSE.md)
