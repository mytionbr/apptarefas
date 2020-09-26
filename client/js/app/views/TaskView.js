class TaskView{
    constructor(model){
        this.element = model;
    }

    template(model){
        return `
        <table >
        <thead class="table-header">
            <tr class='row'>
                <th class='cell'>Title</th>
                <th class='cell'>Done</th>
            </tr>
        </thead>
        <tbody>
           
               ${
                    model.list.map(element=>`
                    <tr class='row'>
                         <td class='cell' id_task="${element.id}"><a href="http://" >
                            ${element.title}
                            </a></td>
                         <td class='cell'> <input class ='checkmark'type="checkbox"></td>
                    </tr>    
                    `).join('')
                }
               
            
        
    </tbody>
    </table>
        `
    }

    update(model){
        this.element.innerHTML = this.template(model);
    }
}