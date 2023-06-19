<template>
    <header class="container d-flex justify-content-start align-items-center">
        <div class="my_img-container me-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Yu Gi Oh logo">
        </div>
        <h1 class="my_title">
            Yu-Gi-Oh API
        </h1>
    </header>
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

        },

        created () {

        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";

    .my_img-container {
        width: 100px;
        height: 100px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .my_title {
        color: red;
    }

</style>