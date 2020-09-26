class TaskDao {
    constructor(connection){
        this._connection = connection
        this._store = 'tasks'   
    }
    add(task){
        return new Promise((resolver,reject)=>{
            let request = this._connection
                .transaction([this._store],"readwrite")
                .objectStore(this._store)
                .add(task)

            request.onsuccess = (e) =>{
                resolver()
            }
            request.onerror = () =>{
                console.log(e.target.error)
                reject('it was not possible to add a new task')
            }
        
        })
    }

    listAll(){
        return new Promise((resolve,reject)=>{
            let cursor = this._connection
                        .transaction([this._store],"readwrite")
                        .objectStore(this._store)
                        .openCursor()

            let tasks = []

            cursor.onsuccess = e =>{
                let current = e.target.result

                if(current){
                    let data = current.value
                  
                    let task = new Task(data._title)
                    task.done = data._done
                    task.description = data._description
                    task.id = data._id
                   
                    tasks.push(task)
                    current.continue()
                }else{
                   resolve(tasks)
                }
            }

            cursor.onerror = e =>{
                reject('Could not list negotiations')
               
            }
        })
    }
    getTaskById(id){
        return new Promise((resolve,reject) =>{
            let dbOpenRequest = this._connection
                                        .transaction([this._store],"readonly")
                                        .objectStore(this._store)
            let request = dbOpenRequest.get(id);
            request.onerror = (error) => {
                console.log("Error", error.target)
            }
            request.onsuccess = (event) =>{
                let element = event.target.result
                if(element!==undefined){
                    console.log('Elemtent with id = ' + id + ' was found\n' + JSON.stringify(element));
                }
                else{
                    console.log('Element with id = ' + id + ' does not exist in the IndexedDB ');
                    resolve(element)
                }
           }
            
                                        

        })

        
    }
}