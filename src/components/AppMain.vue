<template>
    <main class="background">
        <MainSelect :ObjArrayYuGiOh="YuGiOhObj" @radioWaves="filterPerArchetype"/>
        <MainCards :ObjArrayYuGiOh="YuGiOhObj"/>
    </main>
</template>

<script>
    import axios from "axios"
    import MainSelect from "./MainSelect.vue";
    import MainCards from "./MainCards.vue";
    import {store} from "../store.js";

    export default {
        data() {
            return {
                store,
                YuGiOhObj: []
            }
        },

        components: {
            MainSelect,
            MainCards
        },

        created () {
            // Make a request for a user with a given ID
            axios.get(this.store.linkAPI)
            .then((response) => {
                // handle success
                response.data.data.forEach((item) => {
                    this.YuGiOhObj.push(item)
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
        },

        methods: {
            filterPerArchetype (archetype) {
                console.log(archetype)
                this.YuGiOhObj = []
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`)
                .then((response) => {
                    // handle success
                    response.data.data.forEach((item) => {
                        if (item.archetype === archetype) {
                            this.YuGiOhObj.push(item)
                        }
                    })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";

    .background {
        background-color: #d48f38;
        padding: .5rem 0 5rem;
    }
</style>