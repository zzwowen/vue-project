import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import router from './router';
import navMenu from './navmenu';
export default new Vuex.Store({
    modules: {
		    router,
        navMenu
}
});
