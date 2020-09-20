class IDManeger{
    static id(id){
        this._id = id;
        
    }

    static autoIncrement(){
        this._id += 1;
        return this._id;
    }
}