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
     
      async loadData() {
        this.$root.searchInput = this.searchInput;
        const getCharacService = new GetCharacters();
        //la seguent linia no funciona :(
        const response = await getCharacService.execute(this.$root.searchInput);
        this.$root.characters = getCharacService.getFulldata();
      }
      
    }
});