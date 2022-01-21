export default class GetCharactersService {

    constructor () { this.fulldata = [] }

<<<<<<< HEAD
    async execute (searchInput) {
=======
    /* const response = await fetch(...).then(...).then(data=>data);
    this.fulldata = response.text() // o response.JSON() el que necessiteu */

    execute(searchInput) {
>>>>>>> 1cd2847a4cfa8ca91829eff5451c0d99643955d8
        
        console.log(searchInput)
        const response = await fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
<<<<<<< HEAD
        .then(data => this.fulldata = data)
         //aixo no es passa correctament, data s'omple pero fulldata no
        console.log(this.fulldata)
        return this.fulldata
=======
        .then(data => data);

        this.fulldata = response.json();
>>>>>>> 1cd2847a4cfa8ca91829eff5451c0d99643955d8
    }
}


