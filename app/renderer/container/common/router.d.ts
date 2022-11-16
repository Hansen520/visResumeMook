/*
 * @Author: hansen
 * @Date: 2022-11-09 11:08:22
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-09 11:08:36
 * @FilePath: \visResumeMock\app\renderer\container\common\router.d.ts
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
