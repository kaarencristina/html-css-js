const button=document.querySelector('.btn-task')
const input=document.querySelector('.input-task')
const listaCompleta.document.querySelector('.list-tasks')

let myList=[]  

function AddTarefa(){
    myList.push({tarefa:input.value,concluida:false})
    input.value=''
    mostrarTarefas()
}



function mostrarTarefas(){

    let novaLi=''

    myList.forEach((item, posicao)=>{

        novaLi= novaLi+`
        <li class="task" class="${item.concluida && "done"}">
                    <img src="assets/checked.png" alt="check" onclick="Concluir(${posicao})" />
                    <p>${item.tarefa}</p>
                    <img src="assets/trash.png" alt="trash" onclick="deletarItem(${posicao})" />
                    </li>
                    
            `


    })

    listaCompleta.innerHTML=novaLi

    localStorage.setItem('lista',JSON.stringify(myList))
}


function recarregarTela(){
    const tarefasdolocal=localStorage.getItem('lista')
    myList=JSON.parse(tarefasdolocal)

    if(tarefasdolocal){
    mostrarTarefas()}
}

function Concluir(){

 myList[posicao].concluida=!myList[posicao].concluida
 mostrarTarefas()
}


function deletarItem(posicao){
    myList.splice(posicao,1)

    mostrarTarefas()

}
   
recarregarTela()
button.addEventListener('click', AddTarefa)