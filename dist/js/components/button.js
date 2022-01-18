Vue.component("c-button", {
  props: {
    data: Object
  },
  template: '<button v-on:click="loadData">{{ data.name }}</button>',
  
});