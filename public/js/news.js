function getNews (e) {
    /*
    const email=  document.getElementById("email").value;
    const password=  document.getElementById("password").value;
    */

 
 
    axios.get('https://ligabasketbackend.herokuapp.com/api/news') 
   
    .then (response => {
          if (response.data) {
            console.log (response.data)
            const news = response.data;

            var body = document.getElementsByTagName("body")[0];

            // Crea un elemento <table> y un elemento <tbody>
            var tabla   = document.createElement("table");
            var tblBody = document.createElement("tbody");


            
            news.map( (noticia, index) => {

              var hilera = document.createElement("tr");
              var celda = document.createElement("td");
              var textoCelda = document.createTextNode(index + ': ' + noticia.title);
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
              tblBody.appendChild(hilera);
              tabla.appendChild(tblBody);
             });
            // appends <table> into <body>
            body.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "2");
           

          } 
          else {
            alert ('Not News')
          }

      })
      .catch (error => console.log (error))

   
}


function getAdvertisements (e) {
  /*
  const email=  document.getElementById("email").value;
  const password=  document.getElementById("password").value;
  */



  axios.get('https://ligabasketbackend.herokuapp.com/api/advertisements') 
 
  .then (response => {
        if (response.data) {
          console.log (response.data)
          const news = response.data;

          var body = document.getElementsByTagName("body")[0];

          // Crea un elemento <table> y un elemento <tbody>
          var tabla   = document.createElement("table");
          var tblBody = document.createElement("tbody");


          
          news.map( (noticia, index) => {

            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(index + ': ' + noticia.title);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);
            tabla.appendChild(tblBody);
           });
          // appends <table> into <body>
          body.appendChild(tabla);
          // modifica el atributo "border" de la tabla y lo fija a "2";
          tabla.setAttribute("border", "2");
         

        } 
        else {
          alert ('Not Advertisements')
        }

    })
    .catch (error => console.log (error))

 
}

function getUsers (e) {
  /*
  const email=  document.getElementById("email").value;
  const password=  document.getElementById("password").value;
  */



  axios.get('https://ligabasketbackend.herokuapp.com/api/users') 
 
  .then (response => {
        if (response.data) {
          console.log (response.data)
          const news = response.data;

          var body = document.getElementsByTagName("body")[0];

          // Crea un elemento <table> y un elemento <tbody>
          var tabla   = document.createElement("table");
          var tblBody = document.createElement("tbody");


          
          news.map( (noticia, index) => {

            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(index + ': ' + noticia.email);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);
            tabla.appendChild(tblBody);
           });
          // appends <table> into <body>
          body.appendChild(tabla);
          // modifica el atributo "border" de la tabla y lo fija a "2";
          tabla.setAttribute("border", "2");
         

        } 
        else {
          alert ('Not Users')
        }

    })
    .catch (error => console.log (error))

 
}
