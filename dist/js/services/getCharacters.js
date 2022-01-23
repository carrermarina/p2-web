export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    async execute (searchInput) {
        console.log("searchInput de getCharacters")
        console.log(searchInput)
        const response = await fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
        .then(data => this.fulldata = data);
        return this.fulldata
    }

    getFulldata() {
        return this.fulldata;
    }
}

/*El fetch s'executa en assíncron, per tant, la línia "return this.fulldata" s'executa abans de que el fetch resolgui. 
Tal com ho teniu us aconsello que feu servir await del fetch d'aquesta manera:

const response = await fetch(...).then(...).then(data=>data);
this.fulldata = response.text() // o response.JSON() el que necessiteu

D'aquesta manera s'espera a que el fetch acabi i es guarda el resultat a fulldata. */

