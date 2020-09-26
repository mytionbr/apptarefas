class FormView {
    constructor(model){
        this.element = model;
    }

    template(model,clazz){
        return model ? `<p class="${clazz}">${model}<p>`: ``
    }

    update(model,clazz){
        this.element.innerHTML = this.template(model,clazz);
    }
}