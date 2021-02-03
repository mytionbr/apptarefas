function findTask(id){
    let URL = `http://localhost:3000/tasks/${id}`

    let method = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    return fetch(URL,method)
          .then(response => response.json())
          .then(data => data)
}