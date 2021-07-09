function salvar(){
    let data = new Date();
    let minutos = 5;
    data.setTime(data.getTime()+(minutos*1000*60));

    let url = document.getElementsByClassName("url")[0];
    document.cookie = `background=${url.value}; expires=${data.toUTCString()}`

    document.cookie = `darkmode=${darkmode}; expires=${data.toUTCString()}`

    let todo = document.getElementsByClassName("todo")[0]
    document.cookie = `todo=${todo}; expires=${data.toUTCString()}`
    console.log(todo)

    refresh();
}

function refresh(){
    let localCookie
    // background 
    try{
    localCookie=document.cookie
    .split("; ")
    .find(data => data.startsWith("background="))
    .split("=")[1]
    let background = document.getElementsByClassName("background")[0]
    background.style.backgroundImage = "url(" + localCookie + ")";
    }catch{}
    // darkmode 
    try{
    localCookie=document.cookie
    .split("; ")
    .find(data => data.startsWith("darkmode="))
    .split("=")[1]
    if(localCookie=="true"){
        let toggle = document.getElementsByClassName("checkbox")[0]
        toggle.click();
    }
    }catch{}
    // tasks
    try{
        localCookie=document.cookie
        .split("; ")
        .find(data => data.startsWith("todo="))
        .split("=")[1]
        console.log(localCookie)
        }catch{}
}

window.onload = refresh;
