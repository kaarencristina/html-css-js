const button=document.querySelector('.btn-task')
const input=document.querySelector('.input-task')

let myList=[]  

function AddTarefa(){
    myList.push(input.value)
    mostrarTarefas()
}



function mostrarTarefas(){

    let novaLi=''

    myList.forEach()





    /*<li class="task">
                    <img src="assets/checked.png" alt="check" />
                    <p>dar like</p>
                    <img src="assets/trash.png" alt="trash" />
                    </li>*/
}

button.addEventListener('click', AddTarefa)