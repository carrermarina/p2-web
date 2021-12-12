HEAD
class Character {
    constructor(key, name, role, portrait, message) {
      this.key = key;
      this.name = name;
      this.role = role;
      this.portrait = portrait;
      this.message = message
    }
  }


Vue.component('poke-button', {
    props: {
        data: Object
    },
    template: '<button v-on:click="loadPokeData">{{ data.name }}</button>',
    methods: {
        loadPokeData() {
            fetch('http://localhost:<3000>/api/detail' + this.data.id)
                .then(response => response.json())
                .then(data => this.$parent.pokedata = data.abilities[0].ability.name);
        }
    }
})

