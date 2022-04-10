/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const apiKey = 'api_key=f201d5c1d019f48aca1e0e07bbcbf6e0';
//DIRECCION DEL JSON
// https://api.themoviedb.osrg/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f201d5c1d019f48aca1e0e07bbcbf6e0

//const baseUrl = "https://platzi-avo.vercel.app";
const baseUrl = 'https://api.themoviedb.org/3'
const baseImg = 'https://image.tmdb.org/t/p/w342'
const movieCine = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-04-09&'


const appNode = document.querySelector("#app")

 // Intl
 // 1.- Format fechas
 // 2.- Format monedas

const formatPrice = price => {

    const newPrice = new window.Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(price)

    return newPrice;
}

// web api

// Conectarnos al server
window
    //.fetch(`${baseUrl}/api/avo`)
    .fetch(`${baseUrl}${movieCine}${apiKey}`)
    .then(respuesta => respuesta.json())
    .then(responseJson => {

        const todosLosItems = [];

        responseJson.results.forEach( item => {



            // Crear imagen
            const poster = document.createElement("img");
            poster.src = `${baseImg}${item.poster_path}`
            poster.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

            // Crear título
            const title = document.createElement("h2");
            title.className = "text-lg"
            title.textContent = item.title;

            // // Crear precio
            // const price = document.createElement("div");
            // price.className = "text-gray-600"
            // price.textContent = formatPrice(item.price);

            // // Creamos un contenedor el título y el precio
            // const priceAndTitle = document.createElement("div")
            // priceAndTitle.className = "text-center md:text-left";
            // priceAndTitle.appendChild(title);
            // priceAndTitle.appendChild(price);



            // Metemos todo dentro de una tarjeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(poster, title);

            // Metemos todo dentro del contenedor principal
            const contenedor = document.createElement("div");
            contenedor.appendChild(card);

            todosLosItems.push(contenedor);

        });

        appNode.append(...todosLosItems);

    });

// Procesar la respuesta y convertirla en JSON
// JSON -> Data -> Renderizar info browser