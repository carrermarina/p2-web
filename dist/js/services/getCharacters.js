export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    async execute (searchInput) {
        console.log("searchInput de getCharacters")
        console.log(searchInput)
        const response = await fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => this.fulldata = response.json());
        console.log("fulldata:")
        console.log(this.fulldata)
        return this.fulldata
    }
}


