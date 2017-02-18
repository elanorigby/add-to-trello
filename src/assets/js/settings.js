import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/index.scss';
import SettingsContainer from './containers/SettingsContainer';
import {
  isAuthorized,
  authorize
} from 'libs/trello-api';

if (!isAuthorized()) {
  authorize((err) => {
    if (err) console.error(err);
  });
}

ReactDOM.render(
  <SettingsContainer />,
  document.getElementById('root')
);
