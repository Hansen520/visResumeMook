/*
 * @Author: hansen
 * @Date: 2022-11-21 09:54:31
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-21 17:06:20
 * @FilePath: \visResumeMock\app\renderer\container\templates\templateOne\components\Avatar\index.tsx
 */
/**
 * @desc 头像
 * @author pengdaokuan
 */
 import React from 'react';
 import './index.less';
 import AvatarImage from '@assets/avatar.jpg';
 
 function Avatar() {
   return (
     <div styleName="box">
       <div styleName="avatar">
         <img src={AvatarImage} />
       </div>
     </div>
   );
 }
 
 export default Avatar;