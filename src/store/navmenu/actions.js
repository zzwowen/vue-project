import * as types from './mutations_types';

export default {
    set_leftmenu_open: ({
        commit
    }) => {
        commit(types.SET_LEFTMENU_OPEN);
    },
    set_leftmenu_close: ({
        commit
    }) => {
        commit(types.SET_LEFTMENU_CLOSE);
    },
    set_leftmenu_show: ({
        commit
    }) => {
        commit(types.SET_LEFTMENU_SHOW);
    },
    set_leftmenu_hide: ({
        commit
    }) => {
        commit(types.SET_LEFTMENU_HIDE);
    }
};
