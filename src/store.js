// # STORE DEGLI ELEMENTI GLOBALI

import {reactive} from 'vue';
export const store = reactive ({
    linkAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
})

// ? Per importare lo store in un qualsiasi file.vue, fai:
// ? import {store} from 'path dal file allo store.js'
// ? nel return dei data - store:store,