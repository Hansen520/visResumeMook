/*
 * @Author: hansen
 * @Date: 2022-11-21 17:40:37
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:16:56
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\UseTemplate\templateOne\components\Contact\index.tsx
 */
/**
 * @desc 联系方式
 * @author pengdaokuan
 */
 import React from 'react';
 import '../../../styles/template-one.less';
 
 function Contact() {
   return (
     <div className="container">
       <p className="title">联系方式 Contact</p>
       <ul className="content">
         <li>电话：176****2612</li>
         <li>邮箱：1063137960@qq.com</li>
       </ul>
     </div>
   );
 }
 
 export default Contact;