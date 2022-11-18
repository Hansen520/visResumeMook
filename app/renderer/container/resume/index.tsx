/*
 * @Author: hansen
 * @Date: 2022-11-08 17:04:16
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-18 16:39:44
 * @FilePath: \electron\visResumeMock\app\renderer\container\resume\index.tsx
 */
import React from 'react';
import './index.less';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';

const Resume = () => {
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为: ', rootPath);
    console.log('文件读取，内容数据为: ');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });
  return <div>我是kuaile模块</div>;
};

export default Resume;
