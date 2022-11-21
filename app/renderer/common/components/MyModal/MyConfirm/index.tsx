/**
 * @description 弹窗组件
 */
import React from 'react';
import styles from './index.less';
import MyButton from '@common/components/MyButton';
import { IConfirmModal } from '../types';

function MyConfirm({ title, width, className, description, renderFooter, config = {}, eleRef }: IConfirmModal) {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div className={styles["vis-mask"]}>
      <div className={styles["center"]}>
        <div className="vis-confirm-box" style={{ width: width || 440 }} ref={eleRef}>
          <div className="vis-confirm-content">
            <p className="vis-confirm-content-title">{title || '友情提示'}</p>
            {description && <p className="vis-confirm-content-desc">{description}</p>}
          </div>
          {renderFooter || (
            <div className={styles["vis-confirm-footer"]}>
              {cancelBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-cancel-btn"
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
                  className="vis-confirm-footer-btn vis-confirm-footer-submit-btn"
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </MyButton>
              )}
              {deleteBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-delete-btn"
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || '退出'}
                </MyButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyConfirm;