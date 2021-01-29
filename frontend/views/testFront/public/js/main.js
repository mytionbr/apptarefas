function acessarApi(){
    const URL = "http://localhost:3000/tasks"
    const request = fetch(URL)
    let elementos = []
    request
        .then(data => data.json())
        .tren(data => {
            data.forEach(element => {
                elementos.push(...element)
            });
        })
    console.log(elementos)
}
acessarApi()
