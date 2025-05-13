/**
 * 1. Vue如何处理指令：内部指令（v-bind:prop ,v-model,v-show,v-if,v-for），自定义指令
 * 2. 全局指令和局部指令
 * 3. Vue如何处理class和style绑定，以及props绑定
 * 4. Vue如何处理事件绑定 v-on:click
 * **/



 
`v-if`、`v-for`、`v-bind:prop`、`v-on:click` 等并不是严格意义上的指令，应该别视为一种模版语法。

`v-bind:prop` 与 `:prop`是同一个东西，会在compile成render函数时处理成属性传值props。
`v-on:click`与 `@click`是同一个东西，也会在compile成render函数时统一处理成`onClick`的props