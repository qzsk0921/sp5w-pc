import store from '@/store'

function imageLoad(src) {
    // let imgSrc = store.state.assets.imgSrc,
    //     imgSrcLen = imgSrc.length
    let imgSrc = src,
        imgSrcLen = imgSrc.length
    if (!imgSrcLen) {
        store._mutations.UPDATE_LOADING_STATUS[0]({ isLoading: false })
        return
    }
    let promiseAll = [],
        img = []

    for (let i = 0; i < imgSrcLen; i++) {
        promiseAll[i] = new Promise((resolve, reject) => {
            img[i] = new Image()
            img[i].src = imgSrc[i]
            img[i].onload = () => {
                // resolve(img[i])
                resolve()
            }
            img[i].onerror = () => {
                reject(img[i])
            }
        })
    }

    Promise.all(promiseAll).then(() => {
        // if (img.length === imgSrcLen) {
            store._mutations.UPDATE_LOADING_STATUS[0]({ isLoading: false })
        // }
    }).catch(() => {
        // console.log(img)
    })
}

export default imageLoad