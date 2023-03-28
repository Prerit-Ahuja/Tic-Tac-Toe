let turn = "O";
let circle = '<i class="fa-regular fa-circle"></i>';
let cross = '<i class="fa-sharp fa-solid fa-xmark"></i>'
let gameOver = false;
let not=9;

//function to change the turn
const changeTurn = ()=>{
    return turn === "O"? "X": "O";   
}
   
// winner:
var boxText = document.querySelectorAll('.box__content'); 
    const winner = ()=>{

        const array = [];

        for(let i=0; i<9; i++){
            array.push(boxText[i].innerHTML);
        }


        const win_ways  = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[4,3,5],[6,7,8]];

        for(let i=0; i<8; i++){
            if(array[win_ways[i][0]] !== "" && array[win_ways[i][0]] === array[win_ways[i][1]] && array[win_ways[i][0]] === array[win_ways[i][2]]){
                selector();
                document.querySelector('.winning__text').innerHTML = array[win_ways[i][0]] + " Winner!!";
            }
        }
        if(not==0){
            selector();
            document.querySelector('.winning__text').innerHTML ="Match Draw!!";
         }
    }

    const selector=()=>{
        document.querySelector('.win__content').classList.remove("hide");
            document.querySelector('.win__content').classList.add("show");
            document.querySelector('.game__content').classList.remove("show");
            document.querySelector('.game__content').classList.add("inactive");
            document.querySelector('.container').classList.remove("active");
            document.querySelector('.container').classList.add("inactive");
    }

var box = document.querySelectorAll(".box");
const info__text = document.querySelector(".info");
const restart = document.querySelector(".restart");

// play game:
box.forEach((element =>{
    var boxText = element.querySelector('.box__content');
    var box = document.querySelectorAll(".box");
    element.addEventListener('click', ()=>{
        element.style.background = "red";
        if(boxText.innerHTML === ''){
            not--;
            if(turn== "O"){
                boxText.innerHTML= circle;
            }else{
                boxText.innerHTML= cross;
            }
            turn = changeTurn();
            winner();
            if(!gameOver){
                info__text.innerHTML = `Turn for ${turn == "O"? circle: cross}`;
            }
        }
    })
}))

// restart game:
restart.addEventListener('click' ,()=>{
        refreshPage();
})


// Function for restart:
function refreshPage(){
    window.location.reload();
}