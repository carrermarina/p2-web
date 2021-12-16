Vue.component('searchbar', {
    props: {
        name:"hello"
    },
    methods: {
        loadOverwatchData() {
            this.name
            this.$parent.name
            this.$root.name
            fetch('http://localhost:3000/data.json/list?search=' + this.$root.searchField, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data["overwatch"])
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        }
    }
  })