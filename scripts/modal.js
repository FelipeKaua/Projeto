function abrirModal(){
    const modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
}
function fecharModal(){
    const modal = document.getElementsByClassName("modal")[0];
    window.onclick = (click) =>{
        if (click.target==modal){
            modal.style.display = "none";
        }
    }  
}
function aplicarBackground(){
    const url =  document.getElementsByClassName("url")[0];
    const back = document.getElementsByClassName("background")[0];
    back.style.backgroundImage = "url(" + url.value + ")";
    url.value = "";
}
function removerBackground(){
    const back = document.getElementsByClassName("background")[0];
    back.style.backgroundImage = "none";
    url.value = "";
}