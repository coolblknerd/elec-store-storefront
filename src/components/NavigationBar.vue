<template>
  <v-sheet
    >
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Electronic Store</v-toolbar-title>
    </v-app-bar>

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
</template>

<script>
export default {
    name: "NavigationBar",
    props: {
        items: Array,
        color: String,
        drawer: Boolean
    }
}
</script>

<style>

</style>