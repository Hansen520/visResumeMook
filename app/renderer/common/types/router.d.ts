/*
 * @Author: hansen
 * @Date: 2022-11-21 17:04:15
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 17:04:16
 * @FilePath: \visResumeMock\app\renderer\common\types\router.d.ts
 */
// router.d.ts
// 路由类型约束
declare namespace TSRouter {
    export interface Item {
      /**
       * @description 路由跳转链接
       */
      url: string;
      /**
       * @description 关键词
       */
      key: string;
      /**
       * @description 文本
       */
      text: string;
    }
  }