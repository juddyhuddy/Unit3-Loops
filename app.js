function slotmachines(q,a,b,c){
    let plays = 0
    while (q>0){
        q--; a++; plays++;
        if(a ===35 ){
            q+= 30; a = 0;
        }   if (q>0){
            q--;b++;plays++;
             if (b===100)
                 {q+=60;b=0;}
        }   if (q>0){
            q--;c++;plays++;
            if (c===10)
            {q+=9;c=0;}
        }
    }return String(plays)
}
console.log("Martha plays " + slotmachines(48,3,10,4) + " times before going broke")