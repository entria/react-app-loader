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
    appUrl: externalUrl != null && externalUrl.length > 0 ? externalUrl : appUrl,
  });
  return <AppLoader />;
};

export default AnyExternalApp;
