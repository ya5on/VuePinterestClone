import axios from "axios";

export default {
    state () {
        return {
            pins: [],
            page: 2,
        }
    },
    //-------------------------------ACTIONS-----------------------------
    actions: {
        async GET_PINS({commit}) {
            let pins = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20`)
            commit('SET_PINS', pins.data);
        },
        async GET_MORE_PINS({commit, state}) {
            let arr = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${state.page}&_limit=20`)
            state.pins = state.pins.concat(arr.data)
            commit('SET_PINS', state.pins);
            commit('SET_PAGE', state.page)
        },
    },
    //-------------------------------MUTATIONS---------------------------
    mutations: {
        SET_PINS: (state, pins) => {
            state.pins = pins
        },
        SET_PAGE: (state, page) => {
            state.page = page + 1
        },
    },
    //-------------------------------GETTERS-----------------------------
    getters: {
        ALL_PINS(state) {
            return state.pins;
        },
        PIN: state => id => {
            return state.pins.find(e => e.id === id);
        },
    }
}
