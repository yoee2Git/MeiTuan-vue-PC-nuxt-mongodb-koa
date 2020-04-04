# MeiTuan-nuxt-mongodb-PC

> My great Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

> 开始前的一些补充:
> 1.目录
> > `pages`文件夹是放一些页面的,在nuxt里pages的.vue文件将会自动映射到路由是,访问时可 localhost:3000/about 即可
> > `layouts` 类似于模板的存放文件夹后者vue里的router-view组件标签
> `server` 用于存放服务端代码
> plugins 第三方插件


//如果想用 esm模块化开发的话
//1.将package.json文件 npm run dev 命令里添加 "--exec babel-node"
//2.添加依赖 babel-preset-es2015 babel-cli -babel-core

#### css sass的依赖
npm i node-sass sass-loader --D  //安装后不用配置
