function postTasks(task) {
    const URL = "http://localhost:3000/tasks"

    let method = {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json'
        }
    }

    
    return fetch(URL,method)
        .then(response => response.json())
        .then(data => data)

}