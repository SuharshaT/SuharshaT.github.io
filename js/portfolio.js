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