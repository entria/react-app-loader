// @flow

import * as React from 'react';

import loadPageIntoElement from './loadPageIntoElement';

type WithAppLoaderOptions = {
  elementId: string,
  appUrl: string,
  loadPage?: (string, string) => void,
  LoadingComponent?: React.ComponentType<any>,
};
export const withAppLoader = ({
  elementId,
  appUrl,
  loadPage = loadPageIntoElement,
  LoadingComponent,
}: WithAppLoaderOptions): React.ComponentType<any> | Error => {
  type State = {};

  type Props = {};

  return class AppLoader extends React.PureComponent<Props, State> {
    componentDidMount() {
      this.loadApp();
    }

    componentDidCatch = async (error, info) => {
      // eslint-disable-next-line
      console.log('catch error:', error);
      // eslint-disable-next-line
      console.log('catch info:', info);
    };

    loadApp = async () => {
      try {
        await loadPage(elementId, appUrl);
      } catch (e) {
        throw new Error(e);
      }
    };

    render() {
      return (
        <React.Fragment>
          <div id={elementId}>{LoadingComponent ? <LoadingComponent /> : null}</div>
        </React.Fragment>
      );
    }
  };
};
