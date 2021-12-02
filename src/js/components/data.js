//funcio que crida el json
function load(){
    //Nueva instancia de objeto de solicitud desde el constructorXMLHttpRequest
    const request = new XMLHttpRequest();
    //nueva solicitud utilizando el método open()

    request.open('GET', "/src/data.json");
    request.responseType = 'json';
    request.send();
    const overwatch = request.response;
    info(overwatch);
}

request.onload = function() {
    const overwatch = request.response;
    info(overwatch);
}

//funcio que carrega la info que llegeix al html
const info = overwatch => { 
    const array = jsonObj['overwatch'];
  
    for (var i = 0; i < array.length; i++) {
      //creo un article per a que contingui la info
      const myDiv = document.createElement('div');
      //creo un titol per exemple
      const myH1 = document.createElement('h1');
  
      myH1.textContent = array[i].name;
  
      myDiv.appendChild(myH1);
  
      section.appendChild(myDiv);
    }
}
