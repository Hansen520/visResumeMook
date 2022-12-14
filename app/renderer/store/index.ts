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

// ð å¼å¥æä»¬åå¥½ç model
import globalModel from './globalModel';
import resumeModel from './resumeModel';

// ð è¿éåªéè¦è°ç¨ RcReduxModel å®ä¾åä¸ä¸å¾å°æåç reduxModel
const reduxModel = new RcReduxModel([globalModel, resumeModel]);

// ð æ ä¾µå¥å¼çä½¿ç¨ Reduxï¼å³ä½¿ä½ åæåå§ç reducer ä¹ç§æ ·æ¯æ
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
