<template>
    <SingleCard v-for="(card, i) in ObjArrayYuGiOh" :ObjArrayYuGiOh="ObjArrayYuGiOh" :index="i" />
</template>

<script>
    import SingleCard from './SingleCard.vue';

    export default {
        data() {
            return {

            }
        },

        components: {
            SingleCard
        },

        props: {
            ObjArrayYuGiOh: Array
        },

        created () {
            console.log(this.ObjArrayYuGiOh)
        },

        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";
</style>