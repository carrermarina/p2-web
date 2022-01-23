export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    async execute (searchInput) {
        console.log("searchInput de getCharacters")
        console.log(searchInput)
        const response = await fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => data);
        console.log("fulldata:")
        console.log(this.fulldata)
        return this.fulldata = response.json()
    }
}


