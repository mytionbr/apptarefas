class FormController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._form = $('.form');
        this._title = "";

        this._taskList = new TaskList();

        this._form.onsubmit = (event)=>{
           this._submit(event)
        }
    }
    newTask(){
        ConnectionFactory
            .getConnection()
            .then(connection =>{
                let task = new Task(this._title);
                new TaskDao(connection)
                    .add(task)
                    .then( ()=>{
                        this._taskList.addTask(task)
                        console.log(this._taskList)
                        this._clearInput()
                    })
            })
    }
    _clearInput(){
        this._form.reset();
    }
    _submit(event){
        event.preventDefault()
        this._title = this._form.title.value
        this.newTask()
    }
}