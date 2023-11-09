/*
 * @Author: hansen
 * @Date: 2022-11-21 17:40:37
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:17:50
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\UseTemplate\templateOne\components\Job\index.tsx
 */
/**
 * @desc 求职意向
 * @author pengdaokuan
 */
 import React from 'react';
 import '../../../styles/template-one.less';
 import styles from './index.less';
 
 function Job() {
   return (
     <div className={styles["container"]}>
       <p className={styles["title"]}>求职意向 Work</p>
       <ul className={styles["content"]}>
         <li>职位：前端工程师</li>
         <li>城市：广州｜成都｜海口</li>
       </ul>
     </div>
   );
 }
 
 export default Job;