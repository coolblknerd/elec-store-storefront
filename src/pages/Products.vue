<template>
    <v-container fluid>
        <v-row>
            <v-col 
                v-for="product in products"
                :key="product.id"
                cols="4"
            >
                <ProductCard
                    
                    :image="product.image"
                    :name="product.name"
                    :price="product.price"
                    :description="product.description"
                    :company="product.company"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
    name: "ProductPage",
    components: {
        ProductCard
    },
    data() {
        return {
            "products": [
                {
                "id": 1,
                "name": "Alias the Doctor",
                "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
                "model": "Drama",
                "price": "$2.75",
                "company": "Vanguard Total International Bond ETF",
                "category": "Khaki",
                "image": "http://dummyimage.com/167x245.bmp/ff4444/ffffff"
                },
                {
                "id": 2,
                "name": "Six Days Seven Nights",
                "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
                "model": "Adventure|Comedy|Romance",
                "price": "$9.51",
                "company": "Brandywine Realty Trust",
                "category": "Green",
                "image": "http://dummyimage.com/177x228.png/ff4444/ffffff"
                },
                {
                "id": 3,
                "name": "King of Kong, The",
                "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                "model": "Documentary",
                "price": "$2.95",
                "company": "Care.com, Inc.",
                "category": "Purple",
                "image": "http://dummyimage.com/185x237.png/5fa2dd/ffffff"
                },
                {
                "id": 4,
                "name": "Dad",
                "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
                "model": "Drama",
                "price": "$6.18",
                "company": "PLDT Inc.",
                "category": "Maroon",
                "image": "http://dummyimage.com/142x151.png/5fa2dd/ffffff"
                },
                {
                "id": 5,
                "name": "Sundome",
                "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
                "model": "Comedy|Drama|Romance",
                "price": "$8.77",
                "company": "Mid Penn Bancorp",
                "category": "Red",
                "image": "http://dummyimage.com/104x129.png/5fa2dd/ffffff"
                }
            ],
        }
    }
}
</script>

<style>

</style>