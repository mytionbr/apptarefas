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
}