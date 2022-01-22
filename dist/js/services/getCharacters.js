export default class GetCharactersService {

    constructor () { this.fulldata = [] }

    async execute (searchInput) {
<<<<<<< HEAD
=======
    /* const response = await fetch(...).then(...).then(data=>data);
    this.fulldata = response.text() // o response.JSON() el que necessiteu */
>>>>>>> 9bd8cb28b8e6270ddade1dd9e8b1ebe78d2f5dc5
        
        console.log(searchInput)
        fetch (
            'http://localhost:3000/api/list?search=' + searchInput
        )
        .then(response => response.json())
<<<<<<< HEAD
        .then(data => this.fulldata = data)
         //aixo no es passa correctament, data s'omple pero fulldata no
        console.log(this.fulldata)
=======
        .then(data => this.fulldata = data);

>>>>>>> 9bd8cb28b8e6270ddade1dd9e8b1ebe78d2f5dc5
        return this.fulldata
    }
}


