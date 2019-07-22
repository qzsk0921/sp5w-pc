import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import loading from './modules/loading'
import assets from './modules/assets'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        loading,
        assets
    },
    getters
})

export default store