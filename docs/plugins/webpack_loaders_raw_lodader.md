---
autoGroup-1: webpack 
title: webpack loaders
---
## raw-lodader

### 将文件以字符串形式导入 

#### [https://webpack.js.org/loaders/raw-loader/](https://webpack.js.org/loaders/raw-loader/)

`$ npm install raw-loader --save-dev`

三种用法

`import txt from 'raw-loader!./file.txt';`

`import css from '!!raw-loader!./file.txt';`

`const raw = require(!!raw-loader!../effects/${name}).default;`

之前做过的例子

利用raw-lodader  批量获取各个组件中的    name, type, html, css

组件:



![Image](https://github.com/genjiXYZ/76_note/blob/master/docs/.vuepress/public/webpackImage/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200117102450.png?raw=true)




代码:

``` js
const requireEffect = require.context('../../components/CssEffect/effects', false, /\.vue$/);
const effectList = requireEffect.keys();
const effects = {};
const components = {};

for (const filename of effectList) {
  const name = filename.replace('./', '').replace('.vue', '');
  const type = name.substring(0, name.indexOf('-'));
  const raw = require(`!!raw-loader!../../components/CssEffect/effects/${name}`).default;
  const component = requireEffect(filename).default;

  const html = /<template>(.*?)<\/template>/g // find html between template tags
    .exec(JSON.stringify(raw))[0]
    .replace(/<\/?template>/g, '') // remove template tags
    .replace(/^\\n/, '') // remove leading linebreak
    .replace(/\\n/g, '\n') // replace escape characters
    .replace(/\\"/g, '"');

  const css = /<style scoped>(.*?)<\/style>/g // find css between style tags
    .exec(JSON.stringify(raw))[0]
    .replace(/<\/?style(?: scoped)?>/g, '') // remove style tags
    .replace(/^\\n/, '') // remove leading linebreak
    .replace(/\\n/g, '\n'); // replace \n with newlines

  effects[name] = { name, type, html, css };
  components[name] = component;
}
window.console.log( effects  )
window.console.log( components  )

export { effects, components };

```



