document.addEventListener('DOMContentLoaded',()=>{
    criaLinksSidebar()
})

let tasks = [{
    title: 'Hello',
    category: 'Work'
},
{
    title: 'Hello',
    category: 'Work'
},
{
    title: 'Hsdf',
    category: 'Scholl'
}]

function criaLinksSidebar(){
    let container_links = document.querySelector('.container-links')
    
    let div = document.createElement('div')
    div.classList.add('list-tasks-links') 
    
    let elementoOrdenado = ordenaTasksPorCategoria(tasks)
    console.log(elementoOrdenado)
    
}

function ordenaTasksPorCategoria(array){
    
        let categorias = {}
       
        array.forEach(elemento=>{
            //verifica se o objeto está vazio
          if(categorias.length === 0){
            //se estiver, então crie uma propriedade com o valor da
            // categoria
            categorias[elemento.category] = [elemento]
          }else if(categorias.hasOwnProperty(elemento.category)){
              //verifica se o objeto já tem uma propriedade com o valor
              // da categoria, se sim, então adicione o elemento no array
              // da propriedade
              categorias[elemento.category].push(elemento)
          }else{
            // Se não tiver, então crie uma propriedade com o valor da
            // categoria 
            categorias[elemento.category] = [elemento]
          }
          
        })
        return categorias   
}
