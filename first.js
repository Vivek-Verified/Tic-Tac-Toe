const win_array=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let i=0;
let buttons=document.querySelectorAll(".but");
function changeBackgroundtoO(button) {
    button.style.backgroundImage = "url(resources/O.png)";
    button.style.backgroundSize = "cover";
    button.setAttribute("occupied", "true");
    button.setAttribute("point", "O");
}
function changeBackgroundtoX(button) {
    button.style.backgroundImage = "url(resources/X.png)";
    button.style.backgroundSize = "cover";
    button.setAttribute("occupied", "true");
    button.setAttribute("point", "X");

}
function isFilled(button) {
    return button.getAttribute("occupied") === "true";
}
function checkWin() {
    for (let pattern of win_array) {
        let [a, b, c] = pattern;
        let valA = buttons[a].getAttribute("point");
        let valB = buttons[b].getAttribute("point");
        let valC = buttons[c].getAttribute("point");

        if (valA && valA === valB && valA === valC) {
                alert(`${valA} wins!`);
                reset();
            return true;
        }
    }
    return false;
}

function reset() {
    buttons.forEach(button => {
        button.style.backgroundImage = "";
        button.removeAttribute("occupied");
        button.removeAttribute("point");
    });
    i = 0;
}
buttons.forEach((button)=>{
    button.addEventListener("click",function(){
        if(i===8){
            alert("Game Draw!");
            reset();
            return;
        }
        if(isFilled(button)){
            alert("SELECT UNOCCUPIED BOX!");
            return;
        }
        if(i%2==0){
            changeBackgroundtoO(button);
            i++;
        }
        else{
            changeBackgroundtoX(button);
            i++;
        }
        if(checkWin()){
            alert("Game Ended!");
            reset();
            return;
        }
    });

});