export const APP_STORE = {
    state: {
        buttonCont: 0,
        userPhrase: '',
        time: ''
    },
    mutations: {
        INCREMENT_COUNT(state) {
            state.buttonCont ++;
        },
        SET_USER_PHRASE(state, value) {
            state.userPhrase = value;
        },
        SET_TIME(state) {
            state.time = new Date().toLocaleTimeString();
        }
    },
    actions: {
        incrementCount({ commit }) {
            commit('INCREMENT_COUNT');
        },
        changeUserPhrase({ commit }, value) {
            commit('SET_USER_PHRASE', value);
        }
    },
    getters: {
        buttonCount: state => state.buttonCont,
        userPhrase: state => state.userPhrase,
        time: state => state.time
    },
};