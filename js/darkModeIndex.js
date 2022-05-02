//function to set that toggles the css of the page between 
//light mode and dark mode. Useful for night readers and 
//general accessibility 
function darkMode() {
    bodyDarkMode();
    borderDarkMode();
    linkDarkMode();
}
function linkDarkMode(){
    let l = document.getElementById("link");
    if(!pureDarkMode()){
        l.style.color = "black";
        return;
    }
    l.style.color = "#f0f3f6";
}

function pureDarkMode(){
    let element = document.getElementById("mid-top");
    if(element.classList.contains("dark-mode")){
        return true;
    }
    return false;
}


function borderDarkMode(){
    let divTop = document.getElementById("mid-top");
    divTop.classList.toggle("dark-border");
    
    let divBot = document.getElementById("mid-bot");
    divBot.classList.toggle("dark-border");
}

function bodyDarkMode(){
    let divTop = document.getElementById("mid-top");
    let  divBot = document.getElementById("mid-bot");
    //toggle website light and dark theme back and forth
    divTop.classList.toggle("dark-mode"); 
    divBot.classList.toggle("dark-mode");
    let e = document.getElementById("darkBtn");
    //change button it back to light theme if page is in dark mode
    if(pureDarkMode()){
        e.textContent = "Light Mode";
        e.style.backgroundColor = "white";
         e.style.color = "black";
        return;
    }
    //else revert back
    e.textContent = "Dark Mode";
    e.style.color = "white";
    e.style.backgroundColor = "black";
}