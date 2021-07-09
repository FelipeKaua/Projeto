function addTask(){
    const task = document.getElementsByClassName("input")[0]
    if(task.value!=""){
    var counter=0;
    Task(task.value,counter);
    task.value = "";
}}

function Task(task,counter){
var estado;
    switch(counter){
        case 0:
            estado = document.getElementsByClassName("todo")[0]
        break;
        case 1:
            estado = document.getElementsByClassName("doing")[0]
        break;
        case 2:
            estado = document.getElementsByClassName("done")[0]
            counter=-1;
        break;
    }
    let div = document.createElement("div");
    div.setAttribute('class','task');
    estado.appendChild(div);

    let p = document.createElement("p");
    p.setAttribute('class','taskText');
    p.innerHTML = task;
    div.appendChild(p);

    let buttonBox = document.createElement("div");
    buttonBox.setAttribute('class','buttonBox');
    div.appendChild(buttonBox);

    let next = document.createElement("img");
    switch(counter){
        case 0: 
        next.src = 'assets/Seta.png'
        break;
        case 1:
        next.src = 'assets/CheckMark.png'
        break;
        case -1:
        next.src = 'assets/Return.png'
        break;
    }
    next.addEventListener('click', function(){moveTask(task,counter,div)})
    buttonBox.appendChild(next);

    let remove = document.createElement("img");
    remove.src = 'assets/Deletar.png'
    remove.addEventListener('click', function(){removeTask(div)})
    buttonBox.appendChild(remove);

    let linha = document.createElement("div");
    linha.setAttribute('class', 'linhaTask');
    div.appendChild(linha);
    
    counter++;
}

function moveTask(task,counter,div){
    Task(task, counter);
    div.remove()
}

function removeTask(div){ 
    div.remove();
}
