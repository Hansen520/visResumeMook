/*
 * @Author: hansen
 * @Date: 2022-11-21 17:05:23
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 17:05:26
 * @FilePath: \visResumeMock\app\renderer\common\types\rc-redux-model.d.ts
 */
declare namespace TSRcReduxModel {
    interface D {
      [key: string]: any;
    }
    export interface Props<S = D, A = D, R = D> {
      /**
       * @description 命名空间，唯一，必须
       */
      namespace: string;
      /**
       * @description 数据状态，必须
       */
      state: S;
      /**
       * @description action，非必须
       */
      action?: A;
      /**
       * @description action，非必须
       */
      reducers?: R;
      /**
       * @description 是否开启 Immutable，非必须
       */
      openSeamlessImmutable?: boolean;
    }
  }