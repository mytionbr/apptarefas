class TaskController{
    constructor(){
        console.log("Hello world");
        IDManeger.id(0);
        this._taskList = new TaskList();

    }

    newTask(title,description,done){
        let task = new Task(IDManeger.autoIncrement(),title,description,done);
        this._taskList.addTask(task);
    }

    getTasks(){
        return this._taskList;
    }
}