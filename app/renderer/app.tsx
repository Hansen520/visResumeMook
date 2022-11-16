/*
 * @Author: hansen
 * @Date: 2022-10-28 17:10:48
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-14 17:49:07
 * @FilePath: \electron\visResumeMock\app\renderer\app.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import store from './store';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
