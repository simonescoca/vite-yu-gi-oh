<template>
    <div class="card mb-5">
        <img :src="ObjArrayYuGiOh[index].card_images[0].image_url"
        class="card-img-top"
        :alt="'image of ' + ObjArrayYuGiOh[index].name + ' card'">
        <div class="card-body">
            <h5 class="card-title">
                {{ ObjArrayYuGiOh[index].name }}
            </h5>
            <p v-if="ObjArrayYuGiOh[index].archetype" class="card-text">
                {{ ObjArrayYuGiOh[index].archetype }}
            </p>
            <p v-else>
                -
            </p>
            <div class="my_btn-container">
                <a href="#" class="btn btn-outline-warning">
                    Go somewhere
                </a>
            </div>
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

    .card-body {
        position: relative;
    }

    .my_btn-container {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
</style>