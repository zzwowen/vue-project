import * as types from './mutations_types'

export default {
    [types.SET_LEFTMENU_OPEN](state) {
        state.headHeight=70;
        state.leftMenuWidth=200;
        state.leftMenu_flag=true;
    },
    [types.SET_LEFTMENU_CLOSE](state) {
        state.headHeight=70;
        state.leftMenuWidth=40;
        state.leftMenu_flag=false;
    },

    [types.SET_LEFTMENU_HIDE](state) {
        state.leftMenuWidth = 0;
    },

    [types.SET_LEFTMENU_SHOW](state) {
        state.leftMenuWidth = 200;
    }
};
