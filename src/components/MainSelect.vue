<template>
    <div class="container d-flex justify-content-start align-items-center">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
                <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Another action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </li>
            </ul>
        </div>
        <p class="m-0 ms-3 my_cards-founded">
            You found {{ ObjArrayYuGiOh.length }} cards!
        </p>
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
            ObjArrayYuGiOh: Array
        },

        created () {

        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables.scss";
    @use "../styles/mixins.scss";

    .container {
        padding: 2rem 0;
    }

    .my_cards-founded {
        background-color: white;
        padding: .5rem 1rem;
        border-radius: 10px;
    }
</style>