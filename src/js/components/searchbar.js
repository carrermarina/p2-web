import GetCharacters from "../services/getCharacters.js";

Vue.component("search-bar", {
    data: () => {
      return {
        searchInput: ""
      };
    },
    template: `
      <form class="searchbar" v-on:submit.prevent="loadData">
      <input type="text" class="searchfield" v-model="searchInput">
      <input type="submit" class="c-button" value="search">
      </form>`,
    
    methods: {
     
      loadData() {
        this.$root.searchInput = this.searchInput
        const getCharacService = new GetCharacters();
        console.log("this.$root.searchInput: "+this.$root.searchInput)
    
        this.$root.characters = getCharacService.execute(this.$root.searchInput)
        console.log("this.$root.characters: ")
        console.log(+this.$root.characters)
      }
      
    }
});