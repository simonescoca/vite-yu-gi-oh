<template>
    <div class="card">
        <img :src="ObjArrayYuGiOh[index].card_images[0].image_url"
        class="card-img-top"
        :alt="'image of ' + ObjArrayYuGiOh[index].name + ' card'">
        <div class="card-body">
            <h5 class="card-title">
                {{ ObjArrayYuGiOh[index].name }}
            </h5>
            <p class="card-text">
                {{ ObjArrayYuGiOh[index].archetype }}
            </p>
            <a href="#" class="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        components: {

        },

        props: {
            ObjArrayYuGiOh: Array,
            index: Number
        },

        created () {

        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";

    .card {
        width: 18rem;
    }
</style>