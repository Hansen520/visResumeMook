/*
 * @Author: hansen
 * @Date: 2022-11-14 17:10:13
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-17 09:16:15
 * @FilePath: \electron\visResumeMock\app\renderer\store\index.ts
 */
// renderer/store/index.ts
import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// 👇 引入我们写好的 model
import globalModel from './globalModel';
import resumeModel from './resumeModel';

// 👇 这里只需要调用 RcReduxModel 实例化一下得到最后的 reduxModel
const reduxModel = new RcReduxModel([globalModel, resumeModel]);

// 👇 无侵入式的使用 Redux，即使你写最原始的 reducer 也照样支持
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
