Vue.component("fichas", {
  props: {
    data: []
  },
  //template: "<img :src=data />",
  template: '<p>{{ data }}</p>',
});

