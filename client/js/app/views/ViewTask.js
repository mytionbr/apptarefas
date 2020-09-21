class ViewTask{
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
            <tr class='row'>
               ${
                    model.list.map(element=>{
                        return `
                         <td class='cell'><a href="http://">
                            ${element.title}
                         </a></td>`
                    }).join('')
                }
                <td class='cell'> <input class ='checkmark'type="checkbox"></td>
            </tr>
        
    </tbody>
    </table>s
        `
    }

    update(model){
        this.element.innerHTML = this.template(model);
    }
}