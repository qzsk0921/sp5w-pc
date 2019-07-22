import router from './router'
import store from './store'
import isPC from './utils/useragent'

// import imageLoad from './utils/imageLoad';
// import { mapMutations } from 'vuex'

router.beforeEach((to, from, next) => {
    if (!isPC()) {
        location.href = 'http://m.sp5w.com'
        return
    }
    
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // console.log(mapMutations(['updateLoadingStatus']))
    // store.commit('updateLoadingStatus', {isLoading: true})
    store._mutations.UPDATE_LOADING_STATUS[0]({ isLoading: true })
    next()
    // imageLoad()
})

router.afterEach((to) => {
    // imageLoad()
    // store._mutations.UPDATE_LOADING_STATUS[0]({ isLoading: false })
})