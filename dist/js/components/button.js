import {}  from "js/components/searchbar.js"

new Vue({
    el: '#app',
    data() {
      return {
          searchField: null,
          characters:[
              
          ]
      };
    },
    computed: {
      returnCharacter(){
        if(this.searchField){
        return this.characters.filter((item)=>{
          return this.searchField.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
        }else{
          return this.characters;
        }
      }
    }
   
  
  })