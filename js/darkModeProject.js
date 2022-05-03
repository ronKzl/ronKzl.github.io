function darkMode() {
    bodyDarkMode();
    borderDarkMode();
}

function pureDarkMode(){
    let element = document.getElementById("first");
    if(element.classList.contains("dark-mode")){
        return true;
    }
    return false;
}


function borderDarkMode(){
    let firstDiv = document.getElementById("first");
    firstDiv.classList.toggle("dark-border");
    
    let secondDiv = document.getElementById("second");
    secondDiv.classList.toggle("dark-border");


    let thirdDiv = document.getElementById("third");
    let  fourthDiv = document.getElementById("fourth");
    let fifthDiv = document.getElementById("fifth");
    thirdDiv.classList.toggle("dark-border"); 
    fourthDiv.classList.toggle("dark-border");
    fifthDiv.classList.toggle("dark-border"); 

}

function bodyDarkMode(){
    let firstDiv = document.getElementById("first");
    let secondDiv = document.getElementById("second");
    let thirdDiv = document.getElementById("third");
    let fourthDiv = document.getElementById("fourth");
    let fifthDiv = document.getElementById("fifth");
    //toggle website light and dark theme back and forth
    firstDiv.classList.toggle("dark-mode"); 
    secondDiv.classList.toggle("dark-mode");
    thirdDiv.classList.toggle("dark-mode"); 
    fourthDiv.classList.toggle("dark-mode");
    fifthDiv.classList.toggle("dark-mode"); 
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
