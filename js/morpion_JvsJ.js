const cells = document.querySelectorAll(".cell")

let joueur1 = '<i class="fa-solid fa-x"></i>'
let joueur2 = '<i class="fa-solid fa-o"></i>'

let currentplayer=1;

let containerIcone = document.querySelector(".cell>i");

// function pseudoPlayer1(){
//     const Player1 = document.getElementById('#joueur1');
//     let pseudoInput1 = document.getElementById("#ps1");
//     let pseudoOutput1 = document.getElementById("Player1");
//     pseudoInput1.addEventListener("input", function() {
//         let pseudo1 = pseudoInput1.value;
//         pseudoOutput1.innerHTML.replace = pseudo1;
//     });
// }
// function pseudoPlayer2(){
//     const Player2 = document.getElementById('#joueur2');
//     let pseudoInput2 = document.getElementById("#ps2");
//     let pseudoOutput2 = document.getElementById("Player2");
//     pseudoInput2.addEventListener("input", function() {
//         let pseudo2 = pseudoInput2.value;
//         pseudoOutput2.innerHTML.replace = pseudo2;
//     });
// }

function score(){
}

// for(let cell of cells){
//     cell.addEventListener("click",(e)=>{
//         console.log(e.target.id)
//         if(currentplayer===1){
//             e.target.id.classList.add('fa-x');
//             currentplayer=2;
//             return false
//     }
//     e.target.id.classList.add('fa-o');
//     currentplayer=1;
//     })
// }

for(let cell of cells){
    cell.addEventListener("click",(e)=>{
        console.log(e.target.id)
        if(currentplayer===1){
            e.target.innerHTML=joueur1;
            currentplayer=2;
            event.stopPropagation();
            return false
    }
    e.target.innerHTML=joueur2;
    currentplayer=1;
    })
}


const element = document.getElementById('cell>i'); // Identifiant de l'élément HTML que vous souhaitez modifier
element.classList.add('fa-x'); // Ajoute la classe "maClasse" à l'élément