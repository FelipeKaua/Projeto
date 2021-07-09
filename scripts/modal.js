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