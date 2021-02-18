import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        bars: {
            isSideShow: true,
            isTopShow: true
        },
        mouse: {
            x:0,
            y:0
        }
    },
    mutations: {
        toggleSidebar() { this.state.bars.isSideShow = !this.state.bars.isSideShow; },

        toggleTopbar() { this.state.bars.isTopShow = !this.state.bars.isTopShow; },

        mousePosition(state, cursor){
            this.state.mouse.x = cursor.x;
            this.state.mouse.y = cursor.y;
        }
    },
    actions: {}
});