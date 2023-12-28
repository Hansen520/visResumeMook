# visResumeMook
用 react17 + electron + typescript 搭建的桌面端简历搭建型平台！！！！！！！

运行

开发运行方式（注意调用的顺序）


yarn start:render
yarn start:main  

生产运行（注意执行命令的顺序）

yarn build:main  
yarn build:render  
yarn pack  
yarn dist

## 搭建的里程碑
https://juejin.cn/book/6950646725295996940/section/6962898545577820198

## 直接嵌入版更加方便
```javascript
<div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
    <iframe
        src="http://192.168.1.200:5002/user/login"
        style={{ flex: '1 1 auto', border: '0px', width: '100%', height: '100%' }}
    ></iframe>
</div>
```