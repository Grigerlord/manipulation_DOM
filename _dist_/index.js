/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"

//WEB API
//Conectarnos al servidor
    //TAREA: Usar async await
window
    .fetch(url)
    //Procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //JSON -> Data -> Renderizar info en el browser
    .then((responseJson) => {
        const todosLosItems = []
        responseJson.data.forEach(item => {

            //crear imagen
            const image = document.createElement('img')

            //crear titulo
            const title = document.createElement('h2')

            //crear precio
            const price = document.createElement('div')


            const container = document.createElement('div')
            // container.appendChild(image)
            // container.appendChild(title)
            // container.appendChild(price)
            container.append(image, title, price)

            //document.body.appendChild(container)

            todosLosItems.push(container)
        })

        document.body.append(...todosLosItems)
    })