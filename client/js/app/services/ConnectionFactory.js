var connectionFactory = (function () {
    const stores = ['task'];
    const version = 1;
    const dbname = 'todolist'
   
    var connection = null;
    var close = null;
    class ConnectionFactory {
        constructor() {
            throw new Error('It is not allowed to create a new instance of the class')
        }

        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbname, version)

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result)
                }
                openRequest.onsuccess = e => {
                    if (!connection) {
                        connection = e.target.result
                        close = connection.close.bind(connection)  
                        connection.close = function(){
                            throw new Error('You cannot directly close the connection')
                        }
                    };
                    resolve(connection)
                }
                openRequest.onerror = e => {
                    console.log(e.target.error)
                    reject(e.target.error.name)
                }
            })
        }
        static _createStores(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store))
                    connection.createObjectStore(store, { autoIncrement: true })
            })
        }

        static closeConnection(){
            if(connection){
                close()
                connection = null
            }
        }
    }
})()