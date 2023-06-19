// # STORE DEGLI ELEMENTI GLOBALI

import {reactive} from 'vue';
export const store = reactive ({
    searchtext: "",
    loading: true
})

// ? Per importare lo store in un qualsiasi file.vue, fai:
// ? import {store} from 'path dal file allo store.js'
// ? nel return dei data - store:store,