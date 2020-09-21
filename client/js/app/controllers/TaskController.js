class TaskController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._form = $('.form');
        this._title = "";
        IDManeger.id(0);
        this._taskList = new TaskList();
        this._viewTask = new ViewTask($('#tableView'));
        this._viewTask.update(this._taskList);
        this._form.submit = (event)=>{
            event.preventDefault()
            this._title = this._form.title.value
            this.newTask()
        }
        this._viewTask.update(this._taskList);

    }

    newTask(){
        let task = new Task(IDManeger.autoIncrement(),this._title);
        this._taskList.addTask(task);
        console.log(this._taskList)
    }

    getTasks(){
        return this._taskList;
    }

    clearInput(){
        this._form.reset();
    }
}