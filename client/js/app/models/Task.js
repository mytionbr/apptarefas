class Task{
    constructor(title){
       
        this._title = title;
        this._done =  false;
        this._description = "";
        
    }
    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }
    get done(){
        return this._done;
    }
    set done(done){
        this._done = done;
    }
    
    get description(){
        return this._description;
    }
    set description(description){
        this._description = description;
    }
    
  
}