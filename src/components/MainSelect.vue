<template>
    <div class="container d-flex justify-content-start align-items-center">
        <select class="form-select" aria-label="Default select example" v-model="archetype" @change="$emit('radioWaves', archetype)">
            <option selected>
                {{ archetype }}
            </option>
            <option v-for="aType in archetypes">
                {{aType}}
            </option>
        </select>
        <p class="m-0 ms-3 my_cards-founded">
            You found {{ ObjArrayYuGiOh.length }} cards!
        </p>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                archetypes: [],
                archetype: "Select Archetype"
            }
        },

        components: {

        },

        props: {
            ObjArrayYuGiOh: Array
        },

        created () {
            // Make a request for a user with a given ID
            axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
            .then((response) => {
                // handle success
                response.data.forEach ((element) => {
                    this.archetypes.push(element.archetype_name)
                })
                // console.log(this.archetypes)
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

    .form-select {
        width: 25rem;
    }

    .container {
        padding: 2rem 0;
    }

    .my_cards-founded {
        background-color: white;
        padding: .5rem 1rem;
        border-radius: 10px;
    }
</style>