<template>
    <div class="container d-flex flex-wrap justify-content-between">
        <SingleCard v-for="(card, i) in ObjArrayYuGiOh" :ObjArrayYuGiOh="ObjArrayYuGiOh" :index="i" />
    </div>
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

        },

        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";
</style>