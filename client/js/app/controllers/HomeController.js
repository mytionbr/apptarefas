class HomeController{
    constructor(){
       
       let $ = document.querySelector.bind(document)
        this._taskList = new TaskList();
        this._taskView = new TaskView($('#tableView'));
        this._taskView.update(this._taskList);
        ConnectionFactory
            .getConnection()
            .then(connection => new TaskDao(connection))
            .then(dao => dao.listAll())
            .then(tasks =>{
                 tasks.forEach(task =>{
                    console.log(task)
                    this._taskList.addTask(task)})
                    this._taskView.update(this._taskList)})
                          
    }

    getTaskByID(id){
        
    }
   
}