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
                    tasks.push(new Task(data.title))
                    current.continue()
                }else{
                   resolve(tasks)
                }
            }

            cursor.onerror = e =>{
                reject('Could not list negotiations')
                throw new Error(e.target.error)
            }
        })
    }
}