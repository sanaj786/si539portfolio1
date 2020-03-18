var visibleMenu = false;

function showmenu(){
    if(!visibleMenu){
        document.getElementById('toolbar').style.visibility = "visible";
    }
    else{
        document.getElementById('toolbar').style.visibility = "hidden";
    }
    visibleMenu = !visibleMenu;
}

function highlightCurrent(currIndex){
    var navDoc = document.getElementsByTagName('nav').toolbar;
    for(let i=1; i<navDoc.children.length; i++){
        if(currIndex == i){
            navDoc.children[i].className = "current";
        }
        else{
            navDoc.children[i].className = "";
        }
    }
}