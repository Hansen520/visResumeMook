/*
 * @Author: hansen
 * @Date: 2022-10-31 15:23:21
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-09 11:18:19
 * @FilePath: \visResumeMock\app\renderer\router.tsx
 */
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@src/container/common/constants/router';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        {/* 别忘记添加exact */}
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to="/" />
    </HashRouter>
  );
};

export default Router;
