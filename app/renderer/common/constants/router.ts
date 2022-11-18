/*
 * @Author: hansen
 * @Date: 2022-11-09 11:00:56
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-09 11:07:31
 * @FilePath: \visResumeMock\app\renderer\container\common\constants\router.ts
 */
// 模块路径
const ROUTER = {
  root: '/',
  resume: '/resume',
};

export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
};

// 入口模块，TS定义类型必须为TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'code',
    text: '源码',
  },
];
