export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    /* const response = await fetch(...).then(...).then(data=>data);
    this.fulldata = response.text() // o response.JSON() el que necessiteu */

    execute(searchInput) {
        
        console.log(searchInput)
        const response = await fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => data);

        this.fulldata = response.json();
    }
}


