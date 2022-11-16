/*
 * @Author: hansen
 * @Date: 2022-10-31 13:53:30
 * @LastEditors: hansen
 * @LastEditTime: 2022-10-31 14:37:01
 * @FilePath: \visResumeMock\app\renderer\global.d.ts
 */
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

// 这里用用扩充window对象上的值
declare interface Window {
  pdk: string;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
