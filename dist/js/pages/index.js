import {} from "../components/button.js";
import {} from "../components/fichas.js";
import {} from "../components/searchbar.js";

const app = new Vue({
  el: "#Personajes",
  data: () => {
    return {
      characters: [],
      characterData: "",
      searchInput: ""
    };
  },
});
