
function updateTask(task) {
    const URL = "http://localhost:3000/tasks"
    
    let method = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(task) 
    }
    
    return fetch(URL,method)
        .then(response => response.json())
        .then(data => data)

}