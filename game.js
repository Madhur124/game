let buttons = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let contain = document.querySelector(".winnercontain");
let winner = document.querySelector("#winner");

let winningpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let enable = ()=>{
        for(let disa of buttons){
                disa.disabled = false;
                disa.innerText = "";}}
const reset =()=>{turnO = true ,
    enable(),
    contain.classList.add("hide");
}
let turnO = true;
buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the button is clicked")
        if(turnO === true){
        box.innerText="O"
        turnO=false;
    }else(box.innerText = "X",
        turnO=true
    )
    box.disabled = true ;
    checkwinner();
    })
        })
let disable = ()=>{
        for(let disa of buttons){
                disa.disabled = true;}}
const showwinner= (winner)=>{
    contain.innerText=(`congrats the winner is ${winner}`)
    contain.classList.remove("hide");
}
const checkwinner = ()=>{
    for( pattern of winningpatterns){
   let posonevalue = buttons[pattern[0]].innerText;
   let postwovalue=buttons[pattern[1]].innerText;
    let posthreevalue=buttons[pattern[2]].innerText;
   if(posonevalue!="",postwovalue!="",posthreevalue!=""){
   if(posonevalue===postwovalue && postwovalue===posthreevalue){
    console.log("winner",posonevalue)
    disable();
    showwinner(posonevalue)

    
}
    
   }
}
}
resetbtn.addEventListener("click",reset);
