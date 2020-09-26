class FormController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._form = $('.form');
        this._title = "";
        this._message = new FormView($('#message'));
        this._message.update("")
        this._taskList = new TaskList();

        this._form.onsubmit = (event)=>{
           this._submit(event)
        }
    }
    newTask(){
        console.log(this._title)
        if(this._formAuthentication()){
            ConnectionFactory
            .getConnection()
            .then(connection =>{

                let task = new Task(this._title)
                new TaskDao(connection)
                    .add(task)
                    .then( ()=>{
                        this._taskList.addTask(task)
                        console.log(this._taskList)
                        this._clearInput()
                        this._message.update("Task successfully added","message-form-successu")
                    })
            }).catch(this._message.update("Task was not added","message-form-flawed"))
        }else{
            this._message.update("Task was not added: Empty input","message-form-flawed")
        }
                
            
    }
    _clearInput(){
        this._form.reset();
    }
    _submit(event){
        event.preventDefault()
        this._title = this._form.title.value
        this.newTask()
    }
    _formAuthentication(){
        return (this._title === "")? false : true
    }
}