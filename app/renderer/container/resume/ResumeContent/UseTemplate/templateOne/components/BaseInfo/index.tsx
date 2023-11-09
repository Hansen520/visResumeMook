/*
 * @Author: hansen
 * @Date: 2022-11-21 17:40:37
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:16:26
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\UseTemplate\templateOne\components\BaseInfo\index.tsx
 */
/**
 * @desc 基本信息
 * @author pengdaokuan
 */
 import React from 'react';
 import '../../../styles/template-one.less';
 
 function BaseInfo() {
   return (
     <div className="container">
       <p className="title">基本信息 Basic</p>
       <ul className="content">
         <li>院校：湖南大学</li>
         <li>专业：软件工程</li>
         <li>学历：本科</li>
         <li>学年：2015.09 - 2019.06</li>
         <li>籍贯：海南·海口</li>
       </ul>
     </div>
   );
 }
 
 export default BaseInfo;