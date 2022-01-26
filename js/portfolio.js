function navigation(page){
    nextValue = page.id;
    document.getElementById("Home").textContent = nextValue;
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

function myFunction() {
    var x = document.getElementById("mylinks");
    var y = document.getElementById("Home");
    if (y.style.opacity == 0.6){
        y.style.opacity = 1;
        y.style.background = "white";
    } else {
        y.style.opacity = 0.6;
        y.style.background = "grey";
    }
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

window.onload = unhide;

function unhide(){
    document.getElementsByTagName("body")[0].classList.remove("load");
}

function hover(element){
    if(element.tagName == "img" || element.tagName == "IMG"){
        element.classList.add("hoverImage");
    }
    else{
        element.classList.add("hover");
    }
}

function leave(element){
    if(element.tagName == "img" || element.tagName == "IMG"){
        element.classList.remove("hoverImage");
    }
    else{
        element.classList.remove("hover");
    }
}
