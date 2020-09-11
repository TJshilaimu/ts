<template>
  <div>
    <!-- <p @clickMe="hadClick">{{ msg }}</p> -->
    <input type="text" v-model="msg" />
    <p>{{ title }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Watch, Prop } from "vue-property-decorator";
// import Component from "vue-class-component";

@Component({})
export default class MyTest extends Vue {
  @Prop(String) title: string;
  @Prop([String, Number, Boolean]) name: string | number;
  b = "12";
  public a: string;
  data() {
    return {
      data1: "data1",
      data2: "data2",
      data3: {},
    };
  }

  @Watch("msg")
  changeMsg(): void {
    console.log("触发了watch");
  }

  handle1<T>(a: T, b: T, c: T): T {
    return a + b + c;
  }
  ValA = "hello world";
  val = "hello";
  msg = "pop";

  // @Emit()
}
</script>

<style scoped>
p:nth-of-type(1) {
  background-color: red;
}
</style>
