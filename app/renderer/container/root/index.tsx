/*
 * @Author: hansen
 * @Date: 2022-11-08 16:41:11
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-18 16:45:15
 * @FilePath: \electron\visResumeMock\app\renderer\container\root\index.tsx
 */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTER_ENTRY, ROUTER_KEY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import MyButton from '@common/components/MyButton';
import styles from './index.module.less';

const Root = () => {
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalModel.appName);
  console.log(appName, 18);

  useEffect(() => {
    setTimeout(() => {
      console.log('3s 后修改');
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'visResumeMook',
        },
      });
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);
  // 👇 通过 history.push 进行跳转
  const history = useHistory();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      // 通过 shell 模块，打开默认浏览器，进入 github
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };
  return (
    <div className={styles['root']}>
      <div className={styles['container']}>
        <div className={styles['title']}>VisResumeMook</div>
        <div className={styles['tips']}>一个模板<MyButton>按钮</MyButton>制作平台, 让你的<MyButton>按钮</MyButton>更加出众 ~</div>
        <div className={styles['action']}>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} className={styles['item']} onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div className={styles['copyright']}>
          <div className={styles['footer']}>
            <p className={styles['copyright']}>
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
