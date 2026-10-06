// function slotmachines(q,a,b,c){
//     let plays = 0
//     while (q>0){
//         q--; a++; plays++;
//         if(a ===35 ){
//             q+= 30; a = 0;
//         }   if (q>0){
//             q--;b++;plays++;
//              if (b===100)
//                  {q+=60;b=0;}
//         }   if (q>0){
//             q--;c++;plays++;
//             if (c===10)
//             {q+=9;c=0;}
//         }
//     }return String(plays)
// }
// console.log("Martha plays " + slotmachines(77,4,9,3) + " times before going broke")\

function wizard(n,start,duels){
    let owner = start;
    let times = 1;
    console.log(duels[0][0]);
    for(let i = 0; i<n; i++) {
        const duel = duels[i];

        const winner = duel[0];
        const loser = duel[1];

        if (owner != winner && owner != loser) {
            continue;
            
        }
        if (owner === winner) {
            continue;
        }
        owner = winner;
        times++;

 } return{owner,times;}
}

function wizard(3, "A", [["B","A"],["C","B"],["D","C"]])