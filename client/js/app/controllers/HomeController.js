class HomeController{
    constructor(){
       
       let $ = document.querySelector.bind(document)
        this._taskList = new TaskList();
        this._viewTask = new ViewTask($('#tableView'));
        this._viewTask.update(this._taskList);
        ConnectionFactory
            .getConnection()
            .then(connection => new TaskDao(connection))
            .then(dao => dao.listAll())
            .then(tasks =>{
                tasks.forEach(task =>
                    this._taskList.addTask(task))
                    this._viewTask.update(this._taskList)})
                          
    }
   
}