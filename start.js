let boxes  = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");



let personO = true;
wincond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(personO){
            box.innerText = "O";
            
            personO = false;
        }
        else{
            box.innerText = "X";
            
            personO = true;
        }
        console.log("Box was Clicked!");
        box.disabled = true;
        checkWinner();
    }
    )
});

const checkWinner= () => { 
    for(let pattern of wincond){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                alert(`${pos1Val} is the winner!`);
                console.log("Game By PJ");
                boxesDisable(); 
                break;
            }
        }
    }

}

const boxesDisable = () => {
    for(let box of boxes) {
        box.disabled = true;
    }

}

const boxesEnable = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}

const newGame = () => {
    personO =true;
    boxesEnable();
}
reset.addEventListener("click",newGame);

