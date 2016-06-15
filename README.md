
> 基于[Framework7](http://framework7.io/)的开发移动webapp的自动化框架。

## 快速开始

* 安装：
	1. 全局安装 [Gulp 4](https://github.com/gulpjs/gulp/tree/4.0)，执行：`npm install gulpjs/gulp#4.0 -g`
	2. 进入根目录执行： `npm install`
* 演示：
  1. 进入project 目录 执行 `gulp build_dev`
  2. 打开浏览器 输入 Access URLs 所示链接

> 注1：[Gulp 4](https://github.com/gulpjs/gulp/tree/4.0) 目前 [尚未正式发布](https://github.com/gulpjs/gulp/blob/4.0/CHANGELOG.md)，Windows 用户请先安装 [git](http://git-scm.com/)，  
> 然后在 [Git Bash](http://git-for-windows.github.io/) 下执行 `npm install` 即可（非 `CMD`）。 
>  
> 注2：如遇 `npm install` 网络问题，推荐尝试 [cnpm](http://npm.taobao.org/) 安装环境依赖

## 目录结构

#### 工作流目录结构

````bash
z-workflow/
│
├── _tasks          		    // Gulp 任务目录
│   ├── TaskBuildDev.js     // gulp build_dev
│   ├── TaskBuildDist.js    // gulp build_dist
│   ├── TaskFTP.js      	  // gulp ftp
│   ├── TaskZip.js      	  // gulp zip
│   │
│   ├── common
│   │   └── webp.js
│   │
│   ├── index.js
│   │
│   ├── lib
│   │   └── util.js
│   │
│   └── plugins       		  // 插件目录
│       ├── zIndex.js
│       └── ftp.js
│
├── package.json
│
└── project         		  // 项目目录，详见下述项目结构
    ├── src
    ├── dev
    ├── dist
    └── gulpfile.js
````

#### 项目目录结构

````bash
project/                          // 项目目录
.
├── dev
│   ├── html
│   │   ├── android
│   │   ├── index
│   │   └── ios
│   ├── lib
│   └── static
│       ├── css
│       ├── images
│       └── js
├── dist
│   ├── html
│   │   ├── android
│   │   ├── index
│   │   └── ios
│   ├── lib
│   └── static
│       ├── css
│       └── js
└── src
    ├── components
    ├── lib
    ├── static
    │   ├── fonts
    │   ├── images
    │   ├── slice
    │   └── styles
    │       ├── components
    │       ├── framwork7
    │       │   ├── ios
    │       │   └── material
    │       ├── lib
    │       └── public
    └── views
        ├── android
        │   ├── css
        │   ├── img
        │   ├── jade
        │   ├── js
        │   └── less
        ├── index
        └── ios
            ├── css
            ├── img
            ├── jade
            ├── js
            └── less
````

## 配置文件 `.zworkflowrc`

`.zworkflowrc` 配置文件为**隐藏文件**，位于工作流根目录，可存放配置信息或开启相关功能
_如：FTP 配置信息、开启 WebP功能，开启 REM 支持等。_

```bash
{
    "ftp": {
        "host": "xx.xx.xx.xx",
        "port": "21",
        "user": "username",
        "pass": "password",
        "remotePath": "remotePath", //默认上传到根目录下，配置此属性可指定具体子目录
        "includeHtml": true //ftp 上传是否包含 html
    },

    "livereload": {
        "available": true, //开启自动刷新
        "port": 8080,
        "startPath": "html/zIndex.html" //启动时自动打开的路径
    },

    //路径相对于 tasks/plugins 目录
    "plugins": {
        "build_devAfter": ["zIndex"], //dev 任务执行后自动执行
        "build_distAfter": [], //build 任务执行后自动执行
        "ftpAfter": ["ftp"] //ftp 任务执行后自动执行
    },

    "lazyDir": ["../slice"], //gulp-lazyImageCSS 寻找目录(https://github.com/weixin/gulp-lazyimagecss)

    "supportWebp": false, //是否使用 webp

    "supportREM": false, //是否使用REM 转换

    "supportChanged": false,

    "reversion": false, //是否启用md5文件名

    /*工程路径配置*/
    "paths": {
        /*源码目录*/
        "src": {
            "dir": "./src",

            "img": "./src/static/images/**/*.{JPG,jpg,png,gif}",
            "slice": "./src/static/slice/**/*.png",

            "lib": "./src/lib/**/*.js",

            "appJs": "./src/views/*/*.js",
            "appJsALL": "./src/views/**/*.js",

            "less": "./src/static/styles/page-*.less",
            "lessAll": "./src/static/styles/**/*.less",

            "html": ["./src/views/**/*.html", "!./src/views/_*/**.html", "!./src/views/_*/**/**.html"],
            "htmlAll": "./src/views/**/*.html"
        },

        //开发目录
        "dev": {
            "dir": "./dev",

            "appjs": "./dev/static/js", //业务层js

            "css": "./dev/static/css",

            "html": "./dev/html"
        },

        //缓存目录
        "tmp": {
            "dir": "./tmp",

            "appjs": "./tmp/static/js", //业务层js

            "css": "./tmp/static/css",

            "img": "./tmp/static/images",
            "sprite": "./tmp/static/sprite",

            "html": "./tmp/html"
        },

        //生产目录
        "dist": {
            "dir": "./dist",

            "appjs": "./dist/static/js", //业务层js

            "css": "./dist/static/css",

            "img": "./dist/static/images",
            "sprite": "./dist/static/sprite",

            "html": "./dist/html"
        }
    }
}
```

## 任务说明

**1. 开发任务 `gulp build_dev`**

按照`目录结构`创建好项目后，执行 `gulp build_dev` 生成开发文件位于 `/dev`，包含以下过程

- 编译业务层所有js模块文件
- 完成 `less -> css` 编译
- 自动监听文件改动，触发浏览器刷新

_注：浏览器刷新功能可在 `.zworkflowrc` 中进行配置_

**2. 生产任务 `gulp build_dist`**

开发完成后，执行 `gulp build_dist` 生成最终文件到 `/dist` 目录，包含以下过程：

- 编译业务层所有js模块文件
- LESS编译，CSS/JS/IMG 压缩合并
- slice 图片合并成雪碧图
- 文件添加版本号
- WebP 图片支持

**3. FTP 部署 `gulp ftp`**  

依赖于 `生产任务`，执行后，会先执行 `gulp build_dist` ，然后将其生成的 `/dist` 目录上传至 `.zworkflowrc` 指定的 `FTP` 服务器。

**4. 打包任务 `gulp zip`**  

将 `gulp build_dist` 生成 `dist` 目录压缩成 `zip` 格式。