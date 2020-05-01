<template>
  <v-app>
    <NavigationBar 
      :items="items"
      :color="color"
      :drawer="drawer"
    />
    <v-content>
            <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar"

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data() {
    return {
      color: "primary",
      drawer: true,
      items: [
        { title: "Dashboard", path: "/" },
        { title: "Products", path: "/products" }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
