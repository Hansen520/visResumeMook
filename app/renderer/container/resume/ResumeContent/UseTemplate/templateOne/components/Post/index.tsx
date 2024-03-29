/*
 * @Author: hansen
 * @Date: 2022-11-21 17:40:37
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:19:10
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\UseTemplate\templateOne\components\Post\index.tsx
 */
/**
 * @desc 在校经历
 * @author pengdaokuan
 */
 import styles from './index.less';
 import React from 'react';
 
 function Post() {
   return (
     <div className={styles["content"]}>
       <p className={styles["label"]}>在校经历 Post</p>
       <ul className={styles["list"]}>
         <li className={styles["flex"]}>
           <div className={styles["left"]}>
             <p>2016.09-2017.09</p>
             <p>文艺部会长</p>
           </div>
           <div className={styles["right"]}>
             <p>校团委学生会</p>
             <p>
               计划、组织、协调各年级学生组织的文艺和文化娱乐活动，承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目
             </p>
           </div>
         </li>
         <li className={styles["flex"]}>
           <div className={styles["left"]}>
             <p>2017.09-2019.04</p>
             <p>前端工程师</p>
           </div>
           <div className={styles["right"]}>
             <p>湖南瞎说大学网络中心</p>
             <p>
               担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用，任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理
             </p>
           </div>
         </li>
       </ul>
     </div>
   );
 }
 
 export default Post;