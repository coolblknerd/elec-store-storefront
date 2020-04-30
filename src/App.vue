<template>
  <v-app>
    <v-sheet
      class="overflow-hidden"
      style="position: relative;"
    >
      <v-container class="fill-height">
        <v-row>
        <v-btn @click="drawer = !drawer">
          Toggle
        </v-btn>
        </v-row>
      <router-view></router-view>
      </v-container>
      <v-navigation-drawer
      v-model="drawer"
      :color="color"
      absolute
      temporary
    >
          <v-list nav>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.path"
            link
            >

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      color: "primary",
      drawer: true,
      items: [
        { title: "Dashboard", path: "/" },
        { title: "Products", path: "/test" }
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
