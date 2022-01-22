Vue.component("fichas", {
  props: {
    data: String
  },
  //template: "<img :src=data />",
  template: '<p>{{ data }}</p>',
});

