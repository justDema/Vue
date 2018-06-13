// require的语法是Commonjs的，webpack自身可以实现直接使用
// es6的语法需要依赖babel哦
const Vue = require('vue');


new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})