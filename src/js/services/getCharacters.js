export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    async execute (searchInput) {
    /* const response = await fetch(...).then(...).then(data=>data);
    this.fulldata = response.text() // o response.JSON() el que necessiteu */
        
        console.log(searchInput)
        fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => this.fulldata = data);

        return this.fulldata
    }
}


