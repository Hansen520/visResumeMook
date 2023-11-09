/*
 * @Author: hansen
 * @Date: 2022-11-21 17:24:45
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 17:38:33
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeAction\index.tsx
 */
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';

import MyButton from '@common/components/MyButton';

function ResumeAction() {
  const history = useHistory();

  const onBack = () => history.push(ROUTER.root);

  // 导出pdf
  const onExport = () => {};
  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </MyButton>
    </div>
  );
}
export default ResumeAction;
