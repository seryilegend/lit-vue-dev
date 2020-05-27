export const APP_STORE = {
    state: {
        buttonCont: 0,
        userPhrase: '',
    },
    mutations: {
        INCREMENT_COUNT(state) {
            state.buttonCont ++;
        },
        SET_USER_PHRASE(state, value) {
            state.userPhrase = value;
        },
    },
    actions: {
        increment_count({ commit }) {
            commit('INCREMENT_COUNT');
        },
        changeUserPhrase({ commit }, value) {
            commit('SET_USER_PHRASE', value);
        },
    },
    getters: {
        buttonCont: (state) => state.buttonCont,
        userPhrase: (state) => state.userPhrase,
    },
};