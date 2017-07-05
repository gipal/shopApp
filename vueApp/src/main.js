import Vue from 'vue';
import App from './App';
import router from './router';

import './common/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
el: '#app',
router, // 4、路由挂载根实例
template: '<App/>',
components: { App }
});
