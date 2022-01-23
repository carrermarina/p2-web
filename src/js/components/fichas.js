Vue.component("fichas", {
  props: {
    data: Object
  },
  template: 
  `<div class="tarja"><p>key: {{ data.key }}
  <div class="nom">name: {{ data.name }} </div> 
  <div class="rol">role: {{ data.role }} </div> 
  <img class="foto":src="data.portrait" alt="fotografia del personatge" width="50px" height="100px">
  <div class="info">info: {{ data.message }} </div></div>
  `
});

