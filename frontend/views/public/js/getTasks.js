function getTasks() {

    const URL = "http://localhost:3000/tasks"

    let method = {
      method: 'GET',
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  }

   return  fetch(URL,method)
        .then(data => data.json())
        .then(data => data)
        
}