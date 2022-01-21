export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    async execute (searchInput) {
        
        console.log(searchInput)
        const response = await fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => this.fulldata = data)
         //aixo no es passa correctament, data s'omple pero fulldata no
        console.log(this.fulldata)
        return this.fulldata
    }
}


