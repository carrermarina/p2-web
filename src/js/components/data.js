function load() {
    //Nueva instancia de objeto de solicitud desde el constructorXMLHttpRequest
    const request = new XMLHttpRequest();
    //nueva solicitud utilizando el método open()
	request.open('GET', "/src/data.json");

}
