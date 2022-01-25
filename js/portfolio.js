function navigation(page){
    nextValue = page.id;
    var active = document.getElementsByClassName("active");
    var currentId = active[0].id;
    active[0].className = "";
    page.className = "active";
    var current = document.getElementsByClassName("current");
    var next = document.getElementsByClassName(nextValue);
    current[0].className = currentId;
    next[0].className = "current"; 
}

function change(element){
    nextId = element.id;
    var selected = document.getElementsByClassName("selected");
    var selectedId = selected[0].id;
    selected[0].className = "";
    element.className = "selected";
    var visible = document.getElementsByClassName("visible");
    var invisible = document.getElementsByClassName(nextId);
    visible[0].className = selectedId;
    invisible[0].className = "visible"; 
}

window.onload = unhide;

function unhide(){
    document.getElementsByTagName("body")[0].classList.remove("load");
}

function hover(element){
    element.className = "hover";
}

function leave(element){
    element.className = "leave";
}
