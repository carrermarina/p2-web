import {}  from "../components/searchbar.js"

const characters = [
  'Christine',
  'Bernie',
  'Amy',
  'Jimmy',
  'Peter',
  'Kenny',
  'Aaron',
  'Kenneth',
  'Ryan',
  'JC',
  'Barbara',
  'Meet',
  'Ken',
  'Josh',
  'Jamie'
]

Vue.component('search-bar', {
  props: ['value'],
  template: `<input :value="value" @input="$emit('input', $event.target.value)">`
})

Vue.component('search-output', {
  props: ['matches'],
  template: `
    <ul>
      <li v-for="item in matches" :key="item">
        {{ item }}
      </li>
    </ul>
  `
})

new Vue({
  el: "#app",
  data: {
    list: characters,
    search: ''
  },
  computed: {
    matches: function () {
      return this.list.filter(item => item.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
})