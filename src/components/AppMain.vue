<template>
    <MainSelect />
    <MainCards />
</template>

<script>
    import MainSelect from "./MainSelect.vue";
    import MainCards from "./MainCards.vue";
    
    export default {
        data() {
            return {
                
            }
        },

        components: {
            MainSelect,
            MainCards
        },

        props: {

        },

        created () {

        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";
</style>