Vue.component('searchbar', {
    props: {
        data: Object

    },
    template: '<button v-on:click="loadOverwatchData">Search</button>' + '<input class="searchfield" id="inputinfo" type="input" v-model.string="searchField" placeholder="Input here"/>',
    methods: {
        loadOverwatchData() {
            fetch('http://localhost:3000/data.json/list?search=' + this.data, {
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