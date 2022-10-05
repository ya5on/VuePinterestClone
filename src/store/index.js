import { createStore } from 'vuex'
import pin from './modules/pin'
export const store = createStore({
    modules: {
        pin
    }
})

