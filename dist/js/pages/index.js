import {} from "../components/button.js";
import {} from "../components/fichas.js";
import {} from "../components/searchbar.js";
import GetCharacters from "../services/getCharacters.js";

const app = new Vue({
  el: "#Personajes",
  data: () => {
    return {
      characters: [],
      characterData: "",
      searchInput: ""
    };
  },

  /*
  methods: {
    loadData() {
      const getCharacService = new GetCharacters();
      console.log(this.searchInput)

      this.characters = getCharacService.execute(this.searchInput)
      console.log(this.characters)
    }
  }
  */
});
