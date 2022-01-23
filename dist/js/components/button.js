Vue.component("c-button", {
  props: {
    data: Object
  },
  
  template: ` 
  <div id="amagat"><p>key: {{ data.key }}</p> 
  <p>name: {{ data.name }} </p> 
  <p>role: {{ data.role }} </p> 
  <img :src="data.portrait" alt="fotografia del personatge" width="50px" height="100px"></div>
  width: 600px;
  height: 100px;
              `,
});