import GetCharacters from "../services/getCharacters.js";

Vue.component("c-button", {
  props: {
    data: Object
  },
  template: '<button v-on:click="loadData">{{ data.name }}</button>',
  methods: {
    loadData() {
      const getCharacService = new GetCharacters();
      console.log(this.$root.searchInput)

      this.$root.characters = getCharacService.execute(this.$root.searchInput)
      console.log(this.$root.characters)
    }
  }
});