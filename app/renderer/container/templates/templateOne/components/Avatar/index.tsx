/*
 * @Author: hansen
 * @Date: 2022-11-21 09:54:31
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:08:54
 * @FilePath: \visResumeMock\app\renderer\container\templates\templateOne\components\Avatar\index.tsx
 */
/**
 * @desc 头像
 * @author pengdaokuan
 */
 import React from 'react';
 import styles from './index.less';
 import AvatarImage from '@assets/avatar.jpg';
 
 function Avatar() {
   return (
     <div className={styles["box"]}>
       <div className="avatar">
         <img src={AvatarImage} />
       </div>
     </div>
   );
 }
 
 export default Avatar;