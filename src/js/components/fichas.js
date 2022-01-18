Vue.component("fichas", {
  props: {
    data: String
  },
  template: "<img :src=data />"
});

