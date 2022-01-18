export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    execute(searchInput) {
        
        console.log(searchInput)
        fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => this.fulldata = data); //aixo no es passa correctament, data s'omple pero fulldata no

        return this.fulldata
    }
}


