/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app')

//WEB API
//Conectarnos al servidor
    //TAREA: Usar async await
window
    .fetch(`${baseUrl}/api/avo`)
    //Procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //JSON -> Data -> Renderizar info en el browser
    .then((responseJson) => {

        const todosLosItems = []

        responseJson.data.forEach(item => {

            //crear imagen
            const image = document.createElement('img')
            image.src = `${baseUrl}${item.image}`//URL de la imagen

            //crear titulo
            const title = document.createElement('h2')
            title.textContent = item.name

            //crear precio
            const price = document.createElement('div')
            price.textContent = item.price


            const container = document.createElement('div')
            // container.appendChild(image)
            // container.appendChild(title)
            // container.appendChild(price)
            container.append(image, title, price)

            //document.body.appendChild(container)

            todosLosItems.push(container)
        })

        appNode.append(...todosLosItems)
    })


// const url = "https://platzi-avo.vercel.app/api/avo";

// //web api
// async function fetchData() {
//   const response = await fetch(url),
//   data = await response.json(),
//   allItems = [];

//   data.data.forEach((item) => {
//     // create image
//     const image = document.createElement("img");
//     // create title
//     const title = document.createElement("h2");
//     // create price
//     const price = document.createElement("div");

//     const container = document.createElement("div");
//     container.append(image, title, price);

//     allItems.push(container);
//   });

//   document.body.append(...allItems)
// }

// fetchData();