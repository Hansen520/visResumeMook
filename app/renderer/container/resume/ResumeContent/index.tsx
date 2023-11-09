/*
 * @Author: hansen
 * @Date: 2022-11-21 17:25:13
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 17:43:44
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\index.tsx
 */
import React from 'react';
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@common/components/MyScrollBox';
import './index.less';

function ResumeContent() {
    const HEADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;
  
    return (
      <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
        <UseTemplateList.TemplateOne />
      </MyScrollBox>
    );
  }
  export default ResumeContent;