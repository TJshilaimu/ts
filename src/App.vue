<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <test @testEmit="myEmit" /> -->
      <test :title="title" :name="name" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component } from "vue-property-decorator";
// import Component from "vue-class-component";
import Test from "./components/test";

@Component({
  components: {
    test: Test,
  },
})
export default class App extends Vue {
  title = "this is title";
  name = "xxx";
  // myEmit(n) {
  //   console.log("emit start", n);
  // }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
