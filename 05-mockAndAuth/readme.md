# Auth
## 1. Router的配置
在Router中增加一个没有Path的父组件, 如下代码所示:
```XML
<Route component={EnsureLoginContainer}>
  <Route path="category" component={Category} />
  <Route path="brand" component={Brand} />
</Route>
```
这个组件负责检查登录状态, 当未登录时, 将路径跳转到登录页.
## 2. 父组件的编写
参见项目代码

# Mock
## 1. .roadhogrc.mock.js
写法参见项目文件.
## 2. 添加依赖mockjs
## 3. 在src/mock 文件夹下添加相应的文件
具体写法参见项目文件.