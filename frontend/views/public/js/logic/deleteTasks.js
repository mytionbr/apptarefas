function updateTask(id) {
    const URL = `http://localhost:3000/tasks/${id}`
    
    let method = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    
    return fetch(URL,method)
        .then(response => response.json())
        .then(data => data)

}