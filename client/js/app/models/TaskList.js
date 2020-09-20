class TaskList{
    constructor(){
        this._list = [];
    }

    addTask(task){
        this._list.push(task);
    }

    get list(){
        return [].concat(this._list);
    }
}