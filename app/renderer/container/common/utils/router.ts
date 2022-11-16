/*
 * @Author: hansen
 * @Date: 2022-11-09 11:28:38
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-09 11:31:59
 * @FilePath: \visResumeMock\app\renderer\container\common\utils\router.ts
 */
/**
 * @description: 判断是否属于外部连接
 * @param {string} url -链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLocaleLowerCase());
}
