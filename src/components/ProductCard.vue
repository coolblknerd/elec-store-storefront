<template>
    <v-card
            class="mx-auto"
            max-width="400"
            height="350"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            :src="image"
            >
            </v-img>

            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ company }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ price }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-spacer></v-spacer>
            <v-btn
                color="green"
                text
            >
                Add to Cart
            </v-btn>

            <v-btn
                color="red white--text"
                raised
            >
                Buy It Now
            </v-btn>
            <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        image: String,
        name: String,
        price: String,
        description: String,
        company: String
    }
}
</script>

<style>

</style>