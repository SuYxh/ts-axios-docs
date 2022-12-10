export const sidebar = [
  {
    text: '初识 TypeScript',
    items: [
      { text: '简介', link: '/guide/chapter1/README.md' },
      { text: '安装 TypeScript', link: '/guide/chapter1/install.md' },
      { text: '编写第一个 TypeScript 程序', link: '/guide/chapter1/start.md' },
    ],
  },
  {
    text: 'TypeScript 常用语法',
    items: [
      { text: '基础类型', link: '/guide/chapter2/type' },
      { text: '变量声明', link: '/guide/chapter2/declare' },
      { text: '接口', link: '/guide/chapter2/interface' },
      { text: '类', link: '/guide/chapter2/class' },
      { text: '函数', link: '/guide/chapter2/function' },
      { text: '泛型', link: '/guide/chapter2/generic' },
      { text: '类型推断', link: '/guide/chapter2/inference' },
      { text: '高级类型', link: '/guide/chapter2/advance' },
    ],
  },
  {
    text: 'ts-axios 项目初始化',
    items: [
      { text: '需求分析', link: '/guide/chapter3/require' },
      { text: '初始化项目', link: '/guide/chapter3/init' },
      { text: '编写基础请求代码', link: '/guide/chapter3/base' },
    ],
  },
  {
    text: 'ts-axios 基础功能实现',
    items: [
      { text: '处理请求 url 参数', link: '/guide/chapter4/url' },
      { text: '处理请求 body 数据', link: '/guide/chapter4/data' },
      { text: '处理请求 header', link: '/guide/chapter4/header' },
      { text: '获取响应数据', link: '/guide/chapter4/response' },
      { text: '处理响应 header', link: '/guide/chapter4/response-header' },
      { text: '处理响应 data', link: '/guide/chapter4/response-data' },
    ],
  },
  {
    text: 'ts-axios 异常情况处理',
    items: [
      { text: '错误处理', link: '/guide/chapter5/error' },
      { text: '错误信息增强', link: '/guide/chapter5/enhance' },
    ],
  },
  {
    text: 'ts-axios 接口扩展',
    items: [
      { text: '扩展接口', link: '/guide/chapter6/extend' },
      { text: 'axios 函数重载', link: '/guide/chapter6/overload' },
      { text: '响应数据支持泛型', link: '/guide/chapter6/generic' },
    ],
  },
  {
    text: 'ts-axios 拦截器实现',
    items: [
      { text: '拦截器设计与实现', link: '/guide/chapter7/interceptor.md' },
    ],
  },
  {
    text: 'ts-axios 配置化实现',
    items: [
      { text: '合并配置的设计与实现', link: '/guide/chapter8/merge' },
      { text: '请求和响应配置化', link: '/guide/chapter8/transform' },
      { text: '扩展 axios.create 静态接口', link: '/guide/chapter8/create' },
    ],
  },
  {
    text: 'ts-axios 取消功能实现',
    items: [
      { text: '取消功能的设计与实现', link: '/guide/chapter9/cancel' },
    ],
  },
  {
    text: 'ts-axios 更多功能实现',
    items: [
      { text: 'withCredentials', link: '/guide/chapter10/withCredentials' },
      { text: 'XSRF 防御', link: '/guide/chapter10/xsrf' },
      { text: '上传和下载的进度监控', link: '/guide/chapter10/upload-download' },
      { text: 'HTTP 授权', link: '/guide/chapter10/auth' },
      { text: '自定义合法状态码', link: '/guide/chapter10/validateStatus' },
      { text: '自定义参数序列化', link: '/guide/chapter10/paramsSerializer' },
      { text: 'baseURL', link: '/guide/chapter10/baseURL' },
      { text: '静态方法扩展', link: '/guide/chapter10/static' },
    ],
  },
  {
    text: 'ts-axios 单元测试',
    items: [
      { text: '前言', link: '/guide/chapter11/preface' },
      { text: 'Jest 安装和配置', link: '/guide/chapter11/jest' },
      { text: '辅助模块单元测试', link: '/guide/chapter11/helpers' },
      { text: '请求模块单元测试', link: '/guide/chapter11/requests' },
      { text: 'headers 模块单元测试', link: '/guide/chapter11/headers' },
      { text: 'Axios 实例模块单元测试', link: '/guide/chapter11/instance' },
      { text: '拦截器模块单元测试', link: '/guide/chapter11/interceptor' },
      { text: 'mergeConfig 模块单元测试', link: '/guide/chapter11/mergeConfig' },
      { text: '请求取消模块单元测试', link: '/guide/chapter11/cancel' },
      { text: '剩余模块单元测试', link: '/guide/chapter11/more' },
    ],
  },
]
