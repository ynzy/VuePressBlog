---
title: 测试Front Matter
lang: en-US
nav: false
---
# 测试vuePress用法 <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

### 内部链接跳转
* [Home](/) <!-- 跳转到根部的 README.md -->
* [about](/about/) <!-- 跳转到 about 文件夹的 index.html -->
* [about 二级标题 anchor](/about/#二级标题) <!-- 跳转到 about/index.html 的特定 anchor 位置 -->
* [about - about1](/about/about1.html) <!-- 具体文件可以使用 .html 结尾 -->
* [about - about2](/about/about2.md) <!-- 也可以用 .md -->

### 表格
    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |
### Emoji
  * :tada: :100:
### 目录
[[toc]]
## 标题1
内容123
## 标题2
内容123
## 标题3
内容123
## 标题4
内容123
## 标题5
内容123
## 标题6
内容123

### 自定义容器
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### 代码块中的行高亮
``` js{4,6}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
### 导入代码段
<<< @\config\navConf.js{12} 
### markdown中使用vue
```js
<script>
export default {
  mounted () {
   console.log('2')
  }
}
</script>
```
#### 模板语法
{{ 1 + 1 }}
<span v-for="i in 3">{{ i }} </span>
{{ $page }}
::: v-pre
`{{ This will be displayed as-is }}`
:::
<Temp/>

<style lang="styl">
  .example_1g94-agb
    color: red
</style>

<p class="demo example_1g94-agb">这个块是被内联的脚本渲染的，样式也采用了内联样式。</p>


<script>
export default {
  mounted () {
   document.querySelector('.example_1g94-agb').onclick = function () {
       alert('被点击了')
   }
  }
}
</script>