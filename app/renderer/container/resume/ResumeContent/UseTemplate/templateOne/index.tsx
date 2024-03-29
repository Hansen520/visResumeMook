/*
 * @Author: hansen
 * @Date: 2022-11-16 18:02:35
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-22 11:23:20
 * @FilePath: \visResumeMock\app\renderer\container\resume\ResumeContent\UseTemplate\templateOne\index.tsx
 */
/**
 * @desc 模板1
 * @author pengdaokuan
 */
import React from 'react';
import styles from './index.less';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';

function TemplateOne() {
  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div className={styles["a4-box"]}>
      <div className={styles["flex container"]} id="visPdf">
        {/* 左侧 */}
        <div className={styles["left"]}>
          <div className={styles["avatar"]}>
            <Avatar />
          </div>
          <div className={styles["fillColor"]} />
          <div className={styles["baseData"]}>
            <BaseInfo />
            <Contact />
            <Job />
            <Certificate />
          </div>
        </div>
        {/* 内容 */}
        <div className={styles["center"]}>
          <Synopsis />
          <div className={styles["listData"]}>
            <Skill />
            <Post />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
