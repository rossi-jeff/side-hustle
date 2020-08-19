<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
    >
      <v-list
        dense
        nav
        class="mt-16"
      >
        <v-list-item :to="'/'" @click.stop="closeDrawer()">
          <v-list-item-content>Home</v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/technology'" @click.stop="closeDrawer()">
          <v-list-item-content>Technology</v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/contact'" @click.stop="closeDrawer()">
          <v-list-item-content>Contact</v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="accent"
    >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Jeff Rossi</v-toolbar-title>
      
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
  }),

  methods: {
    closeDrawer() {
      setTimeout(() => {
        this.drawer = false
      }, 500)
    }
  },
};
</script>
