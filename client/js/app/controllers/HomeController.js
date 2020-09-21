class HomeController{
    constructor(){
       
       
        this._taskList = new TaskList();
        this._viewTask = new ViewTask($('#tableView'));
        this._viewTask.update(this._taskList);
       
        this._viewTask.update(this._taskList);

    }

    

    getTasks(){
        return this._taskList;
    }

   
}