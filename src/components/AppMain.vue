<template>
    <MainSelect />
    <MainCards :ObjArrayYuGiOh="YuGiOhObj"/>
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
        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";
</style>