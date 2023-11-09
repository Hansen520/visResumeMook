/*
 * @Author: hansen
 * @Date: 2022-11-21 17:40:37
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:16:44
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\UseTemplate\templateOne\components\Certificate\index.tsx
 */
/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 */
 import React from 'react';
 import '../../../styles/template-one.less';
 
 function Certificate() {
   return (
     <div className="container">
       <p className="title">荣誉奖励 Certificate</p>
       <ul className="content">
         <li>全国英语四级证书</li>
         <li>全国计算机二级证书</li>
         <li>湖南瞎说大学自封骰王</li>
         <li>广州第一届酒王大赛参与奖</li>
       </ul>
     </div>
   );
 }
 
 export default Certificate;