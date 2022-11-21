/*
 * @Author: hansen
 * @Date: 2022-11-21 15:29:17
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 16:36:24
 * @FilePath: \visResumeMock\app\renderer\common\components\MyModal\MyDialog\index.tsx
 */
/**
 * @description 弹窗组件
 */
import React from 'react';
import styles from './index.less';
import MyButton from '@common/components/MyButton';
import { IDialogModal } from '../types';
import classNames from 'classnames';

function MyDialog({
  title,
  width,
  className,
  showFooter,
  renderFooter,
  config = {},
  eleRef,
  children,
  childStyle,
}: IDialogModal) {
    const { cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
    return (<div className={"vis-mask"}>
    <div className={"center"}>
      <div className={classNames(styles["vis-dialog-box"], {
        className
      })} style={{ width: width || 760 }} ref={eleRef}>
        <div className={styles["vis-dialog-header"]}>{title || 'VisResumeMook 提示您'}</div>
        <div
          className={styles["vis-dialog-close"]}
          onClick={() => {
            cancelBtn?.callback && cancelBtn.callback();
          }}
        />
        <div className={styles["vis-dialog-content"]} style={childStyle}>
          {children}
        </div>
        {showFooter &&
          (renderFooter || (
            <div className={"vis-dialog-footer"}>
              {cancelBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-dialog-footer-btn vis-dialog-footer-cancel-btn"
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback();
                  }}
                >
                  {cancelBtn?.text || '取消'}
                </MyButton>
              )}
              {submitBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-dialog-footer-btn vis-dialog-footer-submit-btn"
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </MyButton>
              )}
            </div>
          ))}
      </div>
    </div>
  </div>)
}

export default MyDialog;