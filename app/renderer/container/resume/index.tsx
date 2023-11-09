/*
 * @Author: hansen
 * @Date: 2022-11-08 17:04:16
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 17:28:24
 * @FilePath: \visResumeMock\app\renderer\container\resume\index.tsx
 */
import React from 'react';
import './index.less';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import MyButton from '@common/components/MyButton/index';
import MyInput  from '@common/components/MyInput/index';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

const Resume = () => {
  // getAppPath().then((rootPath: string) => {
  //   console.log('应用程序的目录路径为: ', rootPath);
  //   console.log('文件读取，内容数据为: ');
  //   fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`, 'utf-8').then((data) => {
  //     console.log(data);
  //   });
  // });
  return (
    <div className="container">
      <div className="header">
        <ResumeAction />
      </div>
      <div className="content">
        <ResumeContent />
      </div>
      <div className="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
};

export default Resume;
